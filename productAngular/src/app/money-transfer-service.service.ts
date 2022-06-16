import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {throwError, Observable, observable} from 'rxjs'
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoneyTransferServiceService {
  tempURL=environment.baseURL;

  constructor(private obj:HttpClient) { }
  apiurl: string =this.tempURL + '/transfermoney';

getTransferMoney():Observable<object>{
  return this.obj.get(this.apiurl);

}

saveTransferMoney(data:any):Observable<object>{
 //return this.obj.post(this.apiurl,'http://localhost:4200/money-transfer',data);
return this.obj.post(this.apiurl,data);
}
}
