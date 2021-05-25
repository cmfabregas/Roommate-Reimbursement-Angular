import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Addgm } from './addgm';

@Injectable({
  providedIn: 'root'
})
export class AddGroupMembersService {
  private baseUrl = "http://localhost:9010/groups/addusertogroup/";
  constructor(private httpCli:HttpClient) { }


  public postGroup(group:any): Observable<Addgm>{
    const httpHead ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    };
    return this.httpCli.post<Addgm>(this.baseUrl,group,httpHead);
  }
}
