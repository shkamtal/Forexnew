using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class BankDetails
    {
        public int bankid  { get; set; }

        public int accountnumber  { get; set; }

        public string bankname  { get; set; }

        public string city  { get; set; }

        public string accounttype  { get; set; }

        public float account_balance  { get; set; }

        public string ifsccode  { get; set; }

        public int user_id  {get;set;}

        
    }
}