import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { ServicesService } from '../services.service';



@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {

  constructor(private cs:ServicesService,private router:Router){

  }
  canActivate():boolean {
    if(this.cs.loggedIn()){
       return true;
    }
   else{
     
    this.router.navigate(['/adminLogin']);
    return false;
   }
    }
}
