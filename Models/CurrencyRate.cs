using System;

namespace WebApplication1.Models
{
    public class CurrencyRate
    {
        public int country_id { get; set; }
        public string country_name   { get; set; }
        public string tcountry_name    { get; set; }
       // public float current_exchange_rate     { get; set; }

       public int previous_exchange_rate { get; set; }



public int current_exchange_rate { get; set; }
public string date_current_exchange_rate {get;set;}=string.Empty;




}
}
