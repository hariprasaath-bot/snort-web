import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8083/';

  constructor(private http:HttpClient) { }


  userReg(value: any): Observable<string> {  
    return this.http.post(`${this.baseUrl}userregpost`, value, {responseType: 'text'}); 
  }
  userlogin(value: any): Observable<string> {  
    return this.http.post(`${this.baseUrl}userloginpost`, value, {responseType: 'text'} );  
  }
  
}
