import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator,Validators} from '@angular/forms'

import {GlobalVariableComponent } from '../global-variable/global-variable.component'
import {Router} from '@angular/router';

import {CurrencyRateService} from '../currency-rate.service'

@Component({
  selector: 'app-exchange-currancy',
  templateUrl: './exchange-currancy.component.html',
  styleUrls: ['./exchange-currancy.component.css']
})
export class ExchangeCurrancyComponent implements OnInit {

  templogin:any;
  userform:FormGroup;
  temp_exchange_rate:any;

  constructor(private router:Router,private cr:CurrencyRateService,private fb:FormBuilder) {
    this.userform = this.fb.group({
      country_name:['',Validators.required],
      tcountry_name:['',Validators.required],

      current_exchange_rate:['',Validators.required]

     /* AccountNumber:['',Validators.required],
      RecAccountNumber :['',Validators.required],*/
    })
   }

  ngOnInit(): void {
    /*this.templogin=GlobalVariableComponent.CheckLogin;
    if(this.templogin=='No' || this.templogin == '')
    {
      alert("You are not logged in, Please Log in first");
      this.router.navigate(['signIn']);
    }
    else
    {
    }
    console.log(this.templogin);*/
  }

  onChangeCountry()
{
this.cr.get_currencyrate(this.userform.value).subscribe((resp:any)=>{
this.temp_exchange_rate=resp;
if(this.temp_exchange_rate==null)
{
  alert('No data for selected countries');
}
});
}
}
