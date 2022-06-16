
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class User
    {

        public int user_id  { get; set; }

        public string email  { get; set; }

        public string firstname  { get; set; }

        public string lastname  { get; set; }

        public string passportno  { get; set; }

        public string phonenumber  { get; set; }

        public string userpassword  { get; set; }

        public DateTime registrationdate  {get;set;}

        public string nation   { get; set; }
    } 
    }
