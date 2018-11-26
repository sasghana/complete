import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../app.config';
import { ClaimsformModel } from './claimsform.model';

@Injectable()
export class ClaimsformService {
  private url: String = config.url;
  result: any;
  token: any;
  loginToken;
  constructor(private http: HttpClient) {
    this.loginToken = localStorage.getItem('loginToken');
  }


  getAllIssues() {
    console.log(`GET all issues`);
    const headers = new HttpHeaders({ 'Authorization': this.loginToken });
    return this.http.get(`${this.url}/api/users/current`, { headers: headers });
  }

  getIssue() {
    console.log(`GET issue`);
    const headers = new HttpHeaders({ 'Authorization': this.loginToken });
    return this.http.get(`${this.url}/api/users/current`, { headers: headers });
  }

  postIssue(data) {
    console.log('@injectable postData :: ', JSON.stringify(data));
    const headers = new HttpHeaders({ 'Authorization': this.loginToken });
    return this.http.post(`${this.url}/api/issues`, data, { headers: headers });
  }

  updateIssue() {
    console.log('@injectable postData :: ');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.url}/api/signup`, { headers: headers });
  }

  removeIssue() {
    console.log('@injectable postData :: ');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${this.url}/api/signup`, { headers: headers });
  }

}
