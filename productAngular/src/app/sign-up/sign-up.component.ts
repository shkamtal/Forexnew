import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { ToastrService } from 'ngx-toastr';

import { UserInfoServiceService } from "../user-info-service.service";
import {GlobalVariableComponent } from '../global-variable/global-variable.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 fglogin:FormGroup;
 data:any;
ButtonLoginData:any="Login";
tempUserName:any ="";


constructor(private fb:FormBuilder,private ul:UserInfoServiceService,private cs:ServicesService,private router:Router,private toastr: ToastrService) {
   this.fglogin=this.fb.group({
    email:['',Validators.required],
     userpassword:['',Validators.required]
   })
   if(GlobalVariableComponent.LoggedUserEmail !='' && GlobalVariableComponent.CheckLogin=='Yes')
   {
    this.ButtonLoginData="Logout";
    this.tempUserName=GlobalVariableComponent.LoggedUserEmail;
    this.fglogin.value.email=GlobalVariableComponent.LoggedUserEmail;
    this.fglogin.value.userpassword='';
    GlobalVariableComponent.CheckLogin="No";
    GlobalVariableComponent.LoggedUserEmail="";
   }

  }

  ngOnInit(): void {

  }

  getUserInfobyId()
  {

   if( this.ButtonLoginData=="Login")
    {
      if(this.fglogin.value.email=="" || this.fglogin.value.userpassword=="" )
      {
        alert("Please Enter Userid and password")

      }
      else
      {
        GlobalVariableComponent.LoggedUserEmail=this.fglogin.value.email;
        console.log(GlobalVariableComponent.LoggedUserEmail);
        this.tempUserName=GlobalVariableComponent.LoggedUserEmail;
        this.ul.getUserInfobyId(this.fglogin.value).subscribe((resp:any)=>{
          if(resp=="True")
          {
          alert("Logged In successfully");
          GlobalVariableComponent.CheckLogin="Yes";
          this.ButtonLoginData="Logout";

            }
          else
          {
          alert("Invalid User id or password, please try again");
          GlobalVariableComponent.LoggedUserEmail="";
          this.ButtonLoginData="Login";

          }
          })
        }
    }
    else
    {
      GlobalVariableComponent.LoggedUserId="";
     GlobalVariableComponent.LoggedUserEmail="";
      this.tempUserName=GlobalVariableComponent.LoggedUserEmail;
      GlobalVariableComponent.CheckLogin="No";
      alert("You are Logged out.");
      this.ButtonLoginData="Login";
    }
    //alert("Logged In");
      this.fglogin.reset();

     }
}

