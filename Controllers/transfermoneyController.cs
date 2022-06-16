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
    public class transfermoneyController:ControllerBase
    {
         private readonly IConfiguration _configuration;
        public transfermoneyController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select * from TransferDetails
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
        public JsonResult Post(transfermoney transfermoney)
        {
            string query = @"
                INSERT INTO TransferDetails(SentAmount ,ReceivedAmount ,Status ,TransactionDatetime ,BankID,RecID )
                values (@SentAmount ,@ReceivedAmount ,@Status ,@TransactionDatetime , @BankID, @RecID)
            ";

            //INSERT INTO TransferDetails(SentAmount ,ReceivedAmount ,Status ,TransactionDatetime ,BankID )
//VALUES (1000.00,500.00,'SENT','12/11/2022',1,1);

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@SentAmount", transfermoney.SentAmount);
                     myCommand.Parameters.AddWithValue("@ReceivedAmount", transfermoney.ReceivedAmount);
                      myCommand.Parameters.AddWithValue("@Status", transfermoney.Status);
                      //transfermoney.TransactionDatetime=DateTime.Today;
                      //transfermoney.BankID=2;
                      //transfermoney.RecID=3;
                       myCommand.Parameters.AddWithValue("@TransactionDatetime", transfermoney.TransactionDatetime);
                        myCommand.Parameters.AddWithValue("@BankID", transfermoney.BankID);
                         myCommand.Parameters.AddWithValue("@RecID", transfermoney.RecID);
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