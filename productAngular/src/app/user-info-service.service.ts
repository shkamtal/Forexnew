import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse} from '@angular/common/http'
import {throwError, Observable, observable} from 'rxjs'
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserInfoServiceService {
tempURL=environment.baseURL;

  constructor(private obj:HttpClient) { }
  apiurl: string = this.tempURL + '/User';

  loginurl:string=this.tempURL + '/UserLogin';

getUserInfo():Observable<object>{
  return this.obj.get(this.apiurl);

}

Temp():Observable<object>{
  return this.obj.get(this.loginurl);

}

getUserInfobyId(data:any):Observable<object>{


  return this.obj.post(this.loginurl , data);

}

postUserInfo(data:any):Observable<object>
{
return this.obj.post(this.apiurl  , data);

}

handleError(err:HttpErrorResponse)
{

  console.error('Error occurred');
}
}
