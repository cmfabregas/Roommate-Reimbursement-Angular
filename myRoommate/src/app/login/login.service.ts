import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from './login'

@Injectable({
  providedIn: 'root'
})
export class loginservice {

  private urlBase = "http://localhost:9010/login/login";
  constructor(private httpCli: HttpClient) { }

  public getAllFood(): Observable<login[]> {
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };

    return this.httpCli.get<login[]>(this.urlBase, httpHead);
  }

  public postFood(register: any): Observable<login>{
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };
    console.log("asi");
    return this.httpCli.post<login>(this.urlBase, register, httpHead);
  }
}
