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

    public class UserController :ControllerBase
    {
    

     private readonly IConfiguration _configuration;
        public UserController(IConfiguration configuration)
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


        [HttpGet("{id:int}")]
         public JsonResult Get(int id)
        {
            string query = @"
                select * from UserInfo where User_ID = @id
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


         [HttpGet("{emailid}")]
         public JsonResult Get(string emailid)
        {
            string query = @"
                select * from UserInfo where email = @emailid
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


         [HttpPost]
        public JsonResult Post(User user)
        {
            
            string query = @"
                INSERT INTO UserInfo( email, firstName, lastName, passportno, phonenumber, userpassword, registrationdate,nation)
VALUES (@email ,@firstname ,@lastname ,@passportno ,@phonenumber,@userpassword,@registrationdate,@nation)
            "; 
/*
 string query = @"
                INSERT INTO UserInfo(
 email, firstName, lastName, passportno, phonenumber, userpassword, registrationdate,nation)
VALUES ('v@ak.com' ,'varsha' ,'tavade' ,'jhjjh' ,767676,'hjjn','2021-01-01','india')
            ";
*/

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@email", user.email);
                     myCommand.Parameters.AddWithValue("@firstname", user.firstname);
                      myCommand.Parameters.AddWithValue("@lastname", user.lastname);
                       myCommand.Parameters.AddWithValue("@passportno", user.passportno);
                        myCommand.Parameters.AddWithValue("@phonenumber", user.phonenumber);
                         myCommand.Parameters.AddWithValue("@userpassword", user.userpassword);
                         myCommand.Parameters.AddWithValue("@registrationdate", user.registrationdate);
                         myCommand.Parameters.AddWithValue("@nation", user.registrationdate);
                        
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();

                }
            }

            return new JsonResult("Added Successfully");
        }
        
    }
}