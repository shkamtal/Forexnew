import { Component, OnInit,Input } from '@angular/core';
import { FormGroup,FormControl,Validator, FormBuilder, Validators} from '@angular/forms'


import { ServicesService } from '../services.service';

import { UserInfoServiceService } from "../user-info-service.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title="welcome";
  userinfo:any;
  userform:FormGroup;

constructor(private cs:UserInfoServiceService,private fb:FormBuilder) {
  this.userform = this.fb.group({
    email:['',[Validators.required,Validators.email,Validators.minLength(4)]],

    firstname:['',[]],
    lastname:['',[]],
    passportno:['',[]],
    phonenumber:['',[]],
    userpassword:['',[Validators.required,Validators.minLength(8)]],
    registrationdate:['',[Validators.required]],
    nation:['',]
})

}
//user_id:['',Validators.required],
ngOnInit():void  {
  this.cs.getUserInfo().subscribe((resp:any)=>{
    this.userinfo=resp;
    console.log(this.userinfo);
 })
}
registerUser(userform:any)
{

//userform.registrationdate=Date.now.toString();
console.log(this.userform.value);
this.cs.postUserInfo(this.userform.value).subscribe(x=>{
  if(x.toString()=='Added Successfully')
  {alert('Added Successfully')}
  else{alert('Something went wrong, please check you have entered all fields correctly')}
  this.userform.reset();

console.log(x);
});
}


}
