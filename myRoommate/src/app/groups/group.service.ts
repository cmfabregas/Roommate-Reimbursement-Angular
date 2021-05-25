import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private baseUrl = 'http://localhost:9010/groups/username/';
  
  constructor(private httpCli:HttpClient) { }

  getGroupList(): Observable<Group[]> {

    let baseURL2 = this.baseUrl+sessionStorage.getItem('userId');
    console.log(baseURL2);
    const httpHead = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin':'*'
      })
    };
    return this.httpCli.get<Group[]>(baseURL2,httpHead);
  }
}
