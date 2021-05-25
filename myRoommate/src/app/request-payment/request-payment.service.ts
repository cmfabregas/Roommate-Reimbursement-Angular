import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReimbursementClass } from './reimbursement';

@Injectable({
  providedIn: 'root'
})
export class RequestPaymentService {
  private urlBase = "http://localhost:9010/reimbursements/submitReimbursement";

  constructor(private httpCli: HttpClient) { }

  public postReimbursement(reimbursement:any): Observable<ReimbursementClass> {
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.httpCli.post<ReimbursementClass>(this.urlBase, reimbursement, httpHead);

  }

}
