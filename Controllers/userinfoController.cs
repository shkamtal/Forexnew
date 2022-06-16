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
    public class userinfoController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public userinfoController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @" SELECT * FROM userinfo;" ;

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
        public JsonResult Post(userinfo emp)
        {
            string query = @"
    insert into userinfo(email, firstname, lastname, passportno, registrationdate, userpassword, nation, phonenumber) 
                values(@email,@firstname,@lastname,@passportno,@registrationdate,@userpassword,@nation,@phonenumber) 
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                
                    myCommand.Parameters.AddWithValue("@email", emp.email);
                    myCommand.Parameters.AddWithValue("@firstname", emp.firstname);
                    myCommand.Parameters.AddWithValue("@lastname", emp.lastname);
                    myCommand.Parameters.AddWithValue("@passportno", emp.passportno);
                    myCommand.Parameters.AddWithValue("@registrationdate", Convert.ToDateTime(emp.registrationdate));
                    myCommand.Parameters.AddWithValue("@userpassword", emp.userpassword);
                    myCommand.Parameters.AddWithValue("@nation", emp.nation);
                    myCommand.Parameters.AddWithValue("@phonenumber", emp.phonenumber);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();

                }
            }

            return new JsonResult("Added Successfully");
        }

         
        [HttpPut]
        public JsonResult Put(userinfo emp)
        {
            string query = @"
                update userinfo
                set email = @email,
                firstname = @firstname,
                lastname = @lastname,
                passportno = @passportno,
                registrationdate=@registrationdate,
                userpassword=@userpassword,
                nation=@nation,
                phonenumber=@phonenumber
                where user_id=@user_id
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                      myCommand.Parameters.AddWithValue("@user_id", emp.user_id);
                    myCommand.Parameters.AddWithValue("@email", emp.email);
                    myCommand.Parameters.AddWithValue("@firstname", emp.firstname);
                    myCommand.Parameters.AddWithValue("@lastname", emp.lastname);
                    myCommand.Parameters.AddWithValue("@passportno", emp.passportno);
                    myCommand.Parameters.AddWithValue("@registrationdate", Convert.ToDateTime(emp.registrationdate));
                    myCommand.Parameters.AddWithValue("@userpassword", emp.userpassword);
                    myCommand.Parameters.AddWithValue("@nation", emp.nation);
                    myCommand.Parameters.AddWithValue("@phonenumber", emp.phonenumber);
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
                delete from userinfo
                where user_id=@user_id 
            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myCon = new NpgsqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@user_id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    myCon.Close();

                }
            }

            return new JsonResult("Deleted Successfully");
        }




    }
}