import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from "@angular/common/http";
import {ServicesService} from './services.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  authService= this.injector.get(ServicesService);
  constructor(private injector:Injector) { }
  intercept(req:any,next:any){
    let tokenizedRequest=req.clone({
     setHeaders:{
       Authorization:`Bearer ${this.authService.getToken()}`
     }
    })

    return next.handle(tokenizedRequest);
  }

}
