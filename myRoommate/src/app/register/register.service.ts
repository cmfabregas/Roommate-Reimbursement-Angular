import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { register } from './register'

@Injectable({
  providedIn: 'root'
})
export class registerservice {

  private urlBase = "http://localhost:9010/login/register";
  constructor(private httpCli: HttpClient) { }

  public getAllFood(): Observable<register[]> {
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };

    return this.httpCli.get<register[]>(this.urlBase, httpHead);
  }

  public postFood(register: any): Observable<register>{
    const httpHead={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
      })
    };
    console.log("asi");
    return this.httpCli.post<register>(this.urlBase, register, httpHead);
  }
}
