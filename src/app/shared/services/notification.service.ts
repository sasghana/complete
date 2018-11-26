import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from '../../app.config';
import { User } from '../models/user.model';

export interface Notice {
  text: string;
  subtext?: string;
  date?: number;
  icon: string;
  color?: string;
}

const NOTIFICATIONITEMS = [
  {
    text: 'Social',
    subtext: 'Ligula Purus Adipiscing',
    icon: 'people',
    color: 'primary'
  },
  {
    text: 'Promotions',
    subtext: 'Etiam Ligula Dapibus',
    icon: 'local_offer',
    color: 'warn'
  },
  {
    text: 'Updates',
    subtext: 'Sollicitudin Euismod Fringilla',
    icon: 'info',
    color: 'accent'
  },
  {
    text: 'Removed 6 items from task list',
    date: 1427207139000,
    icon: 'delete_sweep'
  },
  {
    text: 'Completed 2 projects',
    date: 1427412725000,
    icon: 'check_circle'
  },
  {
    text: 'Muted notifications',
    date: 1427546580000,
    icon: 'notifications_paused'
  },
  {
    text: 'Added Joel to contact list',
    date: 1428275520000,
    icon: 'person_add'
  },
  {
    text: 'Missed live call from Ellie',
    date: 1428830580000,
    icon: 'phone_missed'
  },
  {
    text: "You've been added to HR group",
    date: 1429363920000,
    icon: 'group_add'
  }
];

@Injectable()
export class NotificationService {

  private url: string = config.url;
  private headers: HttpHeaders;
  private token: string;

  constructor(private http: HttpClient) {

    this.token = localStorage.getItem('token');

    this.headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.token);

  }

  getAll(): Notice[] {
    return NOTIFICATIONITEMS;
  }

  public AddNotification(data): Promise<any> {
    return this.http.post(`${this.url}/notification`, data, { headers: this.headers })
      .toPromise();
  }

  public GetNotificationByUserId(userId): Observable<any> {
    return this.http.get(`${this.url}/notification/${userId}`, { headers: this.headers });
  }

}
