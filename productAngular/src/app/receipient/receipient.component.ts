import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator,Validators} from '@angular/forms'
import{ReceipientDetailsServiceService}  from '../receipient-details-service.service'

import {GlobalVariableComponent } from '../global-variable/global-variable.component'
import {Router} from '@angular/router';


@Component({
  selector: 'app-receipient',
  templateUrl: './receipient.component.html',
  styleUrls: ['./receipient.component.css']
})
export class ReceipientComponent implements OnInit {

  templogin:any;

  title="welcome";
  userinfo:any;
  userform1:FormGroup;

constructor(private router:Router,private cs:ReceipientDetailsServiceService,private fb:FormBuilder) {
  this.userform1 = this.fb.group({
    recaccountnumber :['',[]],
    recaccounttype :['',[]],
    recaccountbalance :['',[]],
    ifsccode :['',[]],
    receiveddate :['',[]],

})

}
//user_id:['',Validators.required],
ngOnInit():void  {
  this.templogin=GlobalVariableComponent.CheckLogin;
  if(this.templogin=='No' || this.templogin=='')
  {
    alert("You are not logged in, Please Log in first");
    this.router.navigate(['signIn']);
  }
  else
  {
  this.cs.getReceipientDetails().subscribe((resp:any)=>{
    this.userinfo=resp;
    console.log(this.userinfo);
 })
}
}
postReceipientDetails(userform:any)
{

//userform.registrationdate=Date.now.toString();
console.log(this.userform1.value);
this.cs.postReceipientDetails(this.userform1.value).subscribe(x=>{
  if(x.toString()=='Added Successfully')
  {alert('Added Successfully')}
this.userform1.reset();
console.log(x);
});
}


//registerUser(userform1:any)
//{

//userform.registrationdate=Date.now.toString();
//console.log(this.userform.value);
//this.cs.postUserInfo(this.userform.value).subscribe(x=>{
  //if(x.toString()=='Added Successfully')
  //{alert('Added Successfully')}

//console.log(x);
//});
//}

}
