import { Component, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
// import { NotificationService } from './notification.service';
import { NotificationService } from '../../shared/services/notification.service';
import { User } from '../../shared/models/user.model';
import { Events } from 'ionic-angular';


import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarDirective
} from 'ngx-perfect-scrollbar';
import {LoginService} from '../../shared/services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  providers: [NotificationService]
})

export class HeaderComponent {
  @Output()
  toggleSidenav = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  notify: any = localStorage.getItem('notify');
  validate: any = (this.notify == null || this.notify == '0') ? '' : this.notify;

  notification_count: any = this.validate;
  user: User;
  avatar;
  public displayName;
  public gravatar;
  public username;
  public email;
  // customStyle = {
  //   width: '40px',
  //   height: '40px',
  //   lineHeight: '24px',
  //   display: 'block'
  // };

  constructor(
    public notificationService: NotificationService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private loginService: LoginService, private router: Router, private events: Events) {
    iconRegistry.addSvgIcon(
      'search-icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/search.svg')
    );

    this.user = JSON.parse(localStorage.getItem('user'));
    this.avatar = this.user.avatar;
    this.displayName = this.user.displayName;
    this.username = this.user.username;
    console.log('user gravatar ', this.user.avatar);
    this.events.subscribe('notification', (res) => {
      localStorage.setItem('notify', res.total);
      this.notification_count = (res.total == null || res.total == '0') ? '' : res.total;
    });
  }

  ShowDropdown() {
    document.getElementById('dropdown-info-user')
      .classList.toggle('show');
  }

  ShowItemsNav() {
    document.getElementById('navbar')
      .classList.toggle('show');
  }
  public onLogout() {
    this.loginService.logout();
    this.router.navigateByUrl('/account/signin');
    console.log(`fare well`);
  }
}
