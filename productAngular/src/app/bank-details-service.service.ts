import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {throwError, Observable, observable} from 'rxjs'
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankDetailsServiceService {
  tempURL=environment.baseURL;
  constructor(private obj:HttpClient) { }
  apiurl: string =this.tempURL + '/bankdetails';

getBankDetails():Observable<object>{
  return this.obj.get(this.apiurl);
}
getBankDetailsById(data:any):Observable<object>{
  return this.obj.get(this.apiurl);
}

postBankDetails(data:any){
  return this.obj.post(this.apiurl,data);
}

}
