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
    public class currencyrateController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public currencyrateController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @" SELECT * FROM currencyrate;" ;

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
        public JsonResult Post(CurrencyRate emp)
        {
            string query = @"
                insert into currencyrate(country_name, previous_exchange_rate, current_exchange_rate, date_current_exchange_rate,tcountry_name) 
                values(@country_name,@previous_exchange_rate,@current_exchange_rate,@date_current_exchange_rate,@tcountry_name) 
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                
                    myCommand.Parameters.AddWithValue("@country_name", emp.country_name);
                    myCommand.Parameters.AddWithValue("@previous_exchange_rate", emp.previous_exchange_rate);
                    myCommand.Parameters.AddWithValue("@current_exchange_rate", emp.current_exchange_rate);
                    myCommand.Parameters.AddWithValue("@date_current_exchange_rate", Convert.ToDateTime(emp.date_current_exchange_rate));
                    myCommand.Parameters.AddWithValue("@tcountry_name",emp.tcountry_name);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();

                }
            }

            return new JsonResult("Added Successfully");
        }

        [HttpPut]
        public JsonResult Put(CurrencyRate emp)
        {
            string query = @"

                update currencyrate
                set country_name = @country_name,
                previous_exchange_rate = @previous_exchange_rate,
                current_exchange_rate = @current_exchange_rate,
                date_current_exchange_rate = @date_current_exchange_rate,
                tcountry_name=@tcountry_name
               
                where country_id=@country_id
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {

                       myCommand.Parameters.AddWithValue("@country_id", emp.country_id);
                     myCommand.Parameters.AddWithValue("@country_name", emp.country_name);
                    myCommand.Parameters.AddWithValue("@previous_exchange_rate", emp.previous_exchange_rate);
                    myCommand.Parameters.AddWithValue("@current_exchange_rate", emp.current_exchange_rate);
                    myCommand.Parameters.AddWithValue("@date_current_exchange_rate", Convert.ToDateTime(emp.date_current_exchange_rate));
                    myCommand.Parameters.AddWithValue("@tcountry_name",emp.tcountry_name);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();

                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                delete from currencyrate
                where country_id=@country_id 
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@country_id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();

                }
            }

            return new JsonResult("Deleted Successfully");
        }


        



////"DefaultConnection": "Server=localhost;Database=Forex;Port=5432;User Id=postgres;Password=varsha;CommandTimeout=300"
//"DefaultConnection":"Server=forexservice2.postgres.database.azure.com;Database=Forex;Port=5432;User Id=dipali@forexservice2;Password=Sevagiri@1;Ssl Mode=Require;"
    }
}