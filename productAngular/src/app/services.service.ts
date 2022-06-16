import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  constructor(private http:HttpClient,private router:Router) { }

registerData(obj:any):Observable<any>{
    return this.http.post('http://localhost:3000/users/contact',obj);
 }

 registerAdmin(obj:any):Observable<any>{
  return this.http.post('http://localhost:3000/admins/adminRegister',obj);
}

delete(obj:any):Observable<any>{
  return this.http.delete('http://localhost:3000/users/contact/'+obj.id,obj)
  }
  
fetch():Observable<any>{
  return this.http.get('http://localhost:3000/users/contacts');
}
update(obj:any):Observable<any>{
  return this.http.put('http://localhost:3000/users/update/'+obj.id,obj)
  }
  login(obj:any):Observable<any>{
    return this.http.post<{token:string}>('http://localhost:3000/users/login',obj);
}  
  adminLogin(obj:any):Observable<any>{
    return this.http.post<{token:string}>('http://localhost:3000/admins/adminLogin',obj);
  }  
  logout() {

    localStorage.removeItem('token');
    this.router.navigate(['/adminLogin']);
  }
  userLogout(){
    localStorage.removeItem('token2');
    this.router.navigate(['/login']);
  }
  loggedIn():boolean{
     return !!localStorage.getItem('token');
  }
 getToken(){
  return localStorage.getItem('token');
 }
}
