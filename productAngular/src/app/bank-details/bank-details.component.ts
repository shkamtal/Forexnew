import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {BankDetailsServiceService} from '../bank-details-service.service';
import {Router} from '@angular/router';

import {GlobalVariableComponent } from '../global-variable/global-variable.component';
import { UserInfoServiceService} from '../user-info-service.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  bankDetails:FormGroup

  temp:any;
  templogin:any;
  temploginemailid:any;

  constructor(private router:Router,private fb:FormBuilder,private bs:BankDetailsServiceService,private us:UserInfoServiceService) {
    this.bankDetails=this.fb.group({
      //bankid:['',[Validators.required]],
      accountnumber:['',[Validators.required]],
      bankname:['',[Validators.required]],
      city:['',[Validators.required]],
      accounttype:['',[Validators.required]],
      account_balance:['',[Validators.required]],
      ifsccode:['',[Validators.required]],
      user_id:['',[Validators.required]],

    })
   }

  ngOnInit(): void {
    this.templogin=GlobalVariableComponent.CheckLogin;
    this.temploginemailid=GlobalVariableComponent.LoggedUserEmail;

    if(this.templogin=='No' || this.templogin=='')
    {
      alert("You are not logged in, Please Log in first");
      this.router.navigate(['signIn']);
    }
    else
    {
      this.bs.getBankDetailsById(this.temploginemailid).subscribe((resp:any)=>{
        this.temp=resp;
              })
    }
  }
registerUser(){
  return this.bs.postBankDetails(this.bankDetails.value).subscribe((resp:any)=>{

    alert("Bank Added Successfully");
    this.bankDetails.reset();
  })
}

}
