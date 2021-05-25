import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotPassword } from './forgotpassword'

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  private urlBase = "http://localhost:9010/user/forgotPassword";
  constructor(private httpCli: HttpClient) { }

  public getAllFood(): Observable<ForgotPassword[]> {
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };

    return this.httpCli.get<ForgotPassword[]>(this.urlBase, httpHead);
  }

  public postFood(ForgotPassword: any): Observable<ForgotPassword>{
    //console.log("inside service method");
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };
    //console.log("asi");
    return this.httpCli.post<ForgotPassword>(this.urlBase, ForgotPassword, httpHead);
  }
}
