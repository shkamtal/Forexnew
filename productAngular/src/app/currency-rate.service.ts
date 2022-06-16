import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {throwError, Observable, observable} from 'rxjs'
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyRateService {
  tempURL=environment.baseURL;

  constructor(private obj:HttpClient) { }
  apiurl: string =this.tempURL + '/Currency';

  get_currencyrate(data:any):Observable<object>{
    return this.obj.post(this.apiurl , data);
    }

    getAll():Observable<object>{
      return this.obj.get(this.apiurl);
    }
}
