import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReimbursementClass } from '../request-payment/reimbursement';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementDashboardService {

  private urlBase = "http://localhost:9010/groups/reimbursement/";

  constructor(private httpCli: HttpClient) { }

  public getReimbursement(groupId : number): Observable<ReimbursementClass[]>{
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.httpCli.get<ReimbursementClass[]>(this.urlBase + groupId, httpHead);

  }
}
