import { Injectable } from '@angular/core';
import{HttpClient,HttpErrorResponse} from '@angular/common/http'
import {throwError, Observable, observable} from 'rxjs'
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ReceipientDetailsServiceService {

  tempURL=environment.baseURL;

  constructor(private obj:HttpClient) { }
  apiurl: string =this.tempURL + '/receipientdetails';

getReceipientDetails():Observable<object>{
  return this.obj.get(this.apiurl);
}

postReceipientDetails(data:any):Observable<object>
{
return this.obj.post(this.apiurl  , data);

}
}
