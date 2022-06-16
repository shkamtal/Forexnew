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
    public class BankDetailsController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public BankDetailsController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select * from BankDetails
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
         public JsonResult Get(string id)
        {
 string query = @"
                select b.bankid from bankdetails b  join userinfo u on b.user_id=u.user_id and u.email= @id 
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
        public JsonResult Post(BankDetails bank)
        {

        string query = @"insert into BankDetails(accountnumber ,bankname ,city ,accounttype ,account_balance ,ifsccode ,user_id)
        VALUES (@accountnumber,@bankname,@city,@accounttype,@account_balance,@ifsccode,@user_id)
        ";
        
        DataTable table = new DataTable();
        string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
        NpgsqlDataReader myReader;
        using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
        {
            myCon.Open();
            using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
            {
                myCommand.Parameters.AddWithValue("@accountnumber", bank.accountnumber);
                myCommand.Parameters.AddWithValue("@bankname", bank.bankname);
                myCommand.Parameters.AddWithValue("@city", bank.city);
                myCommand.Parameters.AddWithValue("@accounttype", bank.accounttype);
                myCommand.Parameters.AddWithValue("@account_balance", bank.account_balance);
                myCommand.Parameters.AddWithValue("@ifsccode",bank.ifsccode);
                myCommand.Parameters.AddWithValue("@user_id", bank.user_id);
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