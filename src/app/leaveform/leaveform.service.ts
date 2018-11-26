import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../app.config';
import { LeaveformModel } from './leaveform.model';

@Injectable()
export class LeaveformService {
  private url: String = config.url;
  result: any;
  token: any;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('loginToken');
  }

  getAllPosts() {
    console.log(`get current user`);
    // const headers =  new HttpHeaders({'Authorization': this.token});
    return this.http.get(`${this.url}/api/posts`);
  }

  getPost(id) {
    console.log(`get user profile`);
    const headers =  new HttpHeaders({'Authorization': this.token});
    return this.http.get(`${this.url}/api/posts/${id}`, {headers: headers});
  }

  postContent(data) {
    console.log('@injectable postData :: ', JSON.stringify(data));
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
    return this.http.post(`${this.url}/api/posts`, data, {headers: headers});
  }

  updatePost(data) {
    console.log('@injectable postData :: ', JSON.stringify(data));
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
    return this.http.post(`${this.url}/api/posts`, data, {headers: headers});
  }

  deletePost(data) {
    console.log('@injectable postData :: ', JSON.stringify(data));
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
    return this.http.post(`${this.url}/api/post`, data, {headers: headers});
  }


}
