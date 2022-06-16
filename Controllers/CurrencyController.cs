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
    public class CurrencyController
    {
         private readonly IConfiguration _configuration;
          public CurrencyController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

     
        [HttpPost]
         public JsonResult get_currencyrate(Currency cr)
        {
            //current_exchange_rate
            string query = @"
                select *  from currencyrate where country_name::varchar = @country_name  AND tcountry_name::varchar = @tcountry_name
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                     myCommand.Parameters.AddWithValue("@country_name", cr.country_name);
                     myCommand.Parameters.AddWithValue("@tcountry_name", cr.tcountry_name);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();

                }
            }
           
            return new JsonResult(table);
           
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select * from currencyrate
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


        
        
    }
}