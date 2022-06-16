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
    public class ReceipientDetailsController:ControllerBase
    {
         private readonly IConfiguration _configuration;
        public ReceipientDetailsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select * from RecipientDetails
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
        public JsonResult Post(ReceipientDetails rec)
        {
            
            string query = @"
                INSERT INTO RecipientDetails( RecAccountNumber , RecAccountType , RecAccountBalance , IFSCCode , ReceivedDate )
VALUES (@RecAccountNumber ,@RecAccountType ,@RecAccountBalance ,@IFSCCode ,@ReceivedDate)
            "; 

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@RecAccountNumber", rec.RecAccountNumber);
                     myCommand.Parameters.AddWithValue("@RecAccountType", rec.RecAccountType);
                      myCommand.Parameters.AddWithValue("@RecAccountBalance", rec.RecAccountBalance);
                       myCommand.Parameters.AddWithValue("@IFSCCode", rec.IFSCCode);
                        myCommand.Parameters.AddWithValue("@ReceivedDate", rec.ReceivedDate);
                                              
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