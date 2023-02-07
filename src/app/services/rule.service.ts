import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  private baseUrl = 'http://localhost:8083/';  
  
  constructor(private http:HttpClient) { }
  
  fetchRule(value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}fetchrule`, value);  
  }  
}
