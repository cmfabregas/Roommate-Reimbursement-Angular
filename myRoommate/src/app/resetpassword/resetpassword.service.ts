import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResetPassword } from './resetpassword'

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private urlBase = "http://localhost:9010/user/generateNewPassword";
  constructor(private httpCli: HttpClient) { }  

  public postFood(ResetPassword: any): Observable<ResetPassword>{
    //console.log("inside service method");
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };
    //console.log("reset password");
    return this.httpCli.put<ResetPassword>(this.urlBase, ResetPassword, httpHead);
  }
}
