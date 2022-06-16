import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator,Validators} from '@angular/forms'

import{ ReceipientDetailsServiceService} from '../receipient-details-service.service'

@Component({
  selector: 'app-receipient1',
  templateUrl: './receipient1.component.html',
  styleUrls: ['./receipient1.component.css']
})
export class Receipient1Component implements OnInit {

  //title="welcome";
  userinfo:any;
  userform1:FormGroup;

constructor(private cs:Receipient1Component,private fb:FormBuilder) {
  this.userform1 = this.fb.group({
    RecAccountNumber :['',[]],
    RecAccountType :['',[]],
    RecAccountBalance :['',[]],
    IFSCCode :['',[]],
    ReceivedDate :['',[]],

})

}
//user_id:['',Validators.required],
ngOnInit():void  {

}
AddReceipient(userform1:any)
{
console.log(this.userform1.value);
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
