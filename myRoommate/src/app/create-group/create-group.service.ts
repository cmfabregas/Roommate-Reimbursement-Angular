import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import { Group } from '../group';

@Injectable({
  providedIn: 'root'
})
export class CreateGroupService {

  private baseUrl = "http://localhost:9010/groups/";
  constructor(private httpCli:HttpClient) { }


  public postGroup(group:any): Observable<Group>{
    const httpHead ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    };
    return this.httpCli.post<Group>(this.baseUrl,group,httpHead);
  }
}

