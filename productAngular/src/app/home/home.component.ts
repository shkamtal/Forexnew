import { Component, OnInit, } from '@angular/core';
import { ServicesService } from '../services.service';
import { ToastrService } from 'ngx-toastr';
import {GlobalVariableComponent}from '../global-variable/global-variable.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  LoggedUserEmail:any='';
  LoggedUser='';

  tempRec:string='ADD RECEIPIENT';
  tempBank:string='ADD BANK ACCOUNT';
  tempMoney:string='MONEY TRANSFER';

constructor(private cs:ServicesService,private toastr: ToastrService) {
console.log(this.LoggedUser);
this.LoggedUserEmail=GlobalVariableComponent.LoggedUserEmail;
this.LoggedUser=GlobalVariableComponent.CheckLogin;
}
  ngOnInit(): void {


  }

hide_Menu()
{
  this.tempRec='';
  this.tempBank='';
  this.tempMoney='';
}
show_Menu()
{
  this.tempRec='ADD RECEIPIENT';
  this.tempBank='ADD BANK ACCOUNT';
  this.tempMoney='MONEY TRANSFER';

}

}


