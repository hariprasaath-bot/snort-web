import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StartsnortService {

  private baseUrl = 'http://localhost:8083/';
  
  constructor(private http :HttpClient) { 
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
  }

  public getInterface():Observable<string[]>
  {
      return this.http.get<string[]>(`${this.baseUrl}getinterface`);
  }

  public getAlerts(value:any):Observable<any>
   {
    return this.http.post<any>(`${this.baseUrl}startSnort`,value);
   }

   public showAlerts(value:any):Observable<any>
   {
    return this.http.post<any>(`${this.baseUrl}searchAlert`,value);
   }
}
