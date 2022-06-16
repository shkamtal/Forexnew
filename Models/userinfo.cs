
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class userinfo
    {
 
        public int user_id { get; set; }
  
        public string email { get; set; }= default!;

        public string firstname { get; set; } = default!;
 
        public string lastname { get; set; } = default!;

        public string passportno { get; set; } = default!;
        public string registrationdate {get;set;} = default!;
         public string userpassword { get; set; } = default!;
        public string nation{get;set;} = default!;
        public int phonenumber { get; set; }

           } 
    }
