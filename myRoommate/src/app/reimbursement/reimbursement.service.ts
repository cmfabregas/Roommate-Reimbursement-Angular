import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Reimbursement} from './reimbursement';
@Injectable({
  providedIn: 'root'
})
export class reimbursementservice {

  private urlBase = "http://localhost:9010/home/rem";
  constructor(private httpCli: HttpClient) { }



  public submitrem(register: any): Observable<Reimbursement>{
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };
    console.log(register);
    return this.httpCli.post<Reimbursement>(this.urlBase, register, httpHead);
  }
}
