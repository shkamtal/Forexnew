import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {
  fgregister:FormGroup;
  constructor(private fb:FormBuilder,private cs:ServicesService,private toastr: ToastrService) {
    this.fgregister=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.email]],
      password:['',Validators.minLength(8)],
      role:['admin']
    })
   }

  ngOnInit(): void {
  }
adminRegister(){
  var obj=this.fgregister.value;
   return this.cs.registerAdmin(obj).subscribe((resp:any)=>{
     if(resp){
      this.toastr.success('register successfully.. !!!');

     }
     else{
        this.toastr.warning('registration failed');
     }
   })
}
}
