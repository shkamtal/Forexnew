import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import {Router} from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  fglogin:FormGroup;


  constructor(private fb:FormBuilder,private cs:ServicesService,private router:Router,private cs2:AuthServiceService,private toastr: ToastrService) {
    this.fglogin=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      role:['admin']
    })
   }

   ngOnInit(): void {

  }
adminlogin(){

  const obj = this.fglogin.value;

  if (obj.email && obj.password) {

      this.cs.adminLogin(obj)
          .subscribe(
              (resp) => {

                  this.toastr.success('Login successfully.. !!!');

                  this.setToken(resp.token);
                  this.router.navigateByUrl('/admin');

              }
          );
  }
}

setToken(token: string) {
  localStorage.setItem('token', token);
  console.log(token);

}
}

