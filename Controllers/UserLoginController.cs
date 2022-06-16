using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Npgsql;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    
    public class UserLoginController :ControllerBase
    {
         private readonly IConfiguration _configuration;
        public UserLoginController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select * from UserInfo
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();

                }
            }

            return new JsonResult(table);
        }

        //[Route("api/[controller]/{email}/{userpassword}/")]
        //[HttpGet("[controller]/{email}/{userpassword}/")]
       //[AllowAnonymous]  
       //[Route("api/UserLogin[controller]/{email}/{userpassword}")] 

        [HttpPost]  
         public JsonResult LoginUser(UserLogin lg)
        {

            string query = @"
                select email from UserInfo where email::varchar = @email  AND userpassword::varchar = @userpassword
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                     myCommand.Parameters.AddWithValue("@email", lg.email);
                     myCommand.Parameters.AddWithValue("@userpassword", lg.userpassword);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();

                }
            }
            if(table.Rows.Count!=0)
            return new JsonResult("True");
            else
            return new JsonResult("False");
        }
    }
}