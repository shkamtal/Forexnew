using System;

namespace WebApplication1.Models
{
    public class ReceipientDetails
    {
        public int RecID { get; set; }

        public int RecAccountNumber { get; set; }

        public string RecAccountType { get; set; }

        public float RecAccountBalance  { get; set; }

        public string IFSCCode  { get; set; }

     
        public DateTime ReceivedDate  {get;set;}
    }
}