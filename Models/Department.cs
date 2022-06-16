using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class Department
    {


        public int transferid { get; set; }

        public string sentamount { get; set; }=string.Empty;



        public string receivedamount{get;set;}=string.Empty;
        public string status {get;set;}=string.Empty;
        public string transactiondatetime{get;set;}=string.Empty;
        public string bankid {get;set;}=string.Empty;
        

    }
}