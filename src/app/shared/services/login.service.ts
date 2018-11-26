import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../../app.config';
import {environment} from '../../../environments/environment';

@Injectable()
export class LoginService {

  private url: string = config.url;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
  }

  public isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  public Login(data): Observable<any>  {
    return this.http.post(`${this.url}/signin`, data, { headers: this.headers });
  }

  public RegisterUser(user): Observable<any> {
    return this.http.post(`${this.url}/signup`, user, { headers: this.headers });
  }


  public logout() {
    localStorage.clear();
  }

}
