import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8083/';
  

  constructor(private http:HttpClient) {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
   }


  userReg(value: any): Observable<string> {  
    return this.http.post(`${this.baseUrl}userregpost`, value, {responseType: 'text'}, ); 
  }

  userlogin(value: any): Observable<string> {  
    return this.http.post(`${this.baseUrl}userloginpost`, value, {responseType: 'text'} );  
  }

  userFetch(value: any): Observable<any> {  
    return this.http.post(`${this.baseUrl}fetchuser`, value, ); 
  }

  userFindAll(): Observable<any>{
    return this.http.post(`${this.baseUrl}viewall`,"");
  }
  
}
