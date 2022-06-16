
using System;

namespace WebApplication1.Models
{
    public class transfermoney
    {
        public int TransferID  { get; set; }

        public float SentAmount  { get; set; }

        public float ReceivedAmount  { get; set; }

        public string Status  { get; set; }

        public int BankID  { get; set; }

         public int RecID  { get; set; }

        public DateTime TransactionDatetime  {get;set;}
    }
}