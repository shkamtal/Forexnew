import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator,Validators} from '@angular/forms'
import {UserInfoServiceService} from '../user-info-service.service'

import {BankDetailsServiceService} from '../bank-details-service.service';
import {ReceipientDetailsServiceService}  from '../receipient-details-service.service'
import {MoneyTransferServiceService} from '../money-transfer-service.service'
import {CurrencyRateService} from '../currency-rate.service'

import {GlobalVariableComponent } from '../global-variable/global-variable.component'
import {Router} from '@angular/router';



@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.css']
})


export class MoneyTransferComponent implements OnInit {
  bankdetails:any;
  recdetails:any;
  userinfo:any;
  moneytransfer:any;
  currencydetails:any;

  userform:FormGroup;
  userform1:FormGroup;

  tempBankId:any;
  tempRecId:any;

  templogin:any;
  temploginemailid:any;

  tempfromcountryvalue:any;
  temptocountryvalue:any;

  res:any;
  temp_exchange_rate:any;
  current_exchange_rate:number=0;
  flag:boolean=true;

  arrTransfer: Array<{SentAmount: number,ReceivedAmount:number; Status:string,TransactionDatetime:string,BankID:number, RecID: number}> = [];

    constructor(private router:Router,private cs:UserInfoServiceService,private bd:BankDetailsServiceService,private rd: ReceipientDetailsServiceService,private mt:MoneyTransferServiceService,private cr:CurrencyRateService,private fb:FormBuilder) {
    this.userform = this.fb.group({
      country_name:['',Validators.required],
      tcountry_name:['',Validators.required],

      current_exchange_rate:['',Validators.required]

     /* AccountNumber:['',Validators.required],
      RecAccountNumber :['',Validators.required],*/
    })
    this.userform1 = this.fb.group({
      bankid:['',Validators.required],
      recid :['',Validators.required],

      SentAmount:['',Validators.required],
      ReceivedAmount:['',Validators.required],
      Status:['',Validators.required],
      TransactionDatetime:['',Validators.required]
    })
  }
  ngOnInit():void  {
    this.templogin=GlobalVariableComponent.CheckLogin;
    this.temploginemailid=GlobalVariableComponent.LoggedUserEmail;
    console.log(this.templogin);

    if(this.templogin=='No' || this.templogin=='')
    {
      alert("You are not logged in, Please Log in first");
      this.router.navigate(['signIn']);
    }
    else
    {
      //Get all Banks
      this.bd.getBankDetailsById(this.temploginemailid).subscribe((resp:any)=>{
      this.userform1.value.bankid=resp;
      this.tempBankId= this.userform1.value.bankid
      this.bankdetails=resp;
      })
      //Get All Recipients
      this.rd.getReceipientDetails().subscribe((resp:any)=>{
      this.userform1.value.recid=resp;
      this.tempRecId= this.userform1.value.recid
      this.recdetails=resp;
      })
    }
  }


onChangeCountry()
{
this.cr.get_currencyrate(this.userform.value).subscribe((resp:any)=>{
  console.log(this.temp_exchange_rate);
this.temp_exchange_rate=resp;

});
}

onChangeRate(ratedata:any)
{
this.temp_exchange_rate=ratedata;

}

onChangeSent(sentdata:any)
{
  if(this.temp_exchange_rate==null)
  {
    this.onChangeCountry();
  }
this.res=parseFloat(this.userform1.value.SentAmount)*parseFloat(this.temp_exchange_rate);
this.userform1.get("ReceivedAmount")?.patchValue(this.res);
}

CheckAllData()
{
//this.flag=true;
//if(this.userform1.get(""))
}

saveTransferMoney()
{

  if(this.flag==false)
  {

  }
  else
  {
  this.mt.saveTransferMoney(this.userform1.value).subscribe(x=>{
  if(x.toString()=='Added Successfully')
  {alert('Added Successfully')

}
  })
  this.userform.reset();
  this.userform1.reset();
  }
  return;

}

}



 /*  this.cs.getUserInfo().subscribe((resp:any)=>{
   this.userinfo=resp;
   console.log(this.userinfo);

   getTransferDetails()
{
  console.log(this.moneytransfer.value);
  this.mt.getTransferMoney().subscribe((resp:any)=>{
    this.moneytransfer=resp;

  })
}

/*
  onChangefrom(fromcountryvalue:any) {
    console.log(fromcountryvalue);
    this.tempfromcountryvalue=fromcountryvalue;
}

onChangeto(tocountryvalue:any) {
    console.log(tocountryvalue);
    this.temptocountryvalue=tocountryvalue;
} */

