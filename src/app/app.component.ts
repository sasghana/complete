import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SocketService } from './shared/services/socket.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { NotificationService } from './shared/services/notification.service';
import { User } from './shared/models/user.model';

import { Events } from 'ionic-angular';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  public user: User;
  constructor( public socketservice: SocketService,
               public iziToast: Ng2IzitoastService,
               public router: Router,
               private notificationService: NotificationService,
               public events: Events,
               translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    AOS.init();
    this.AllEvents();
    this.GetNotificationByUserId();
  }

  GetNotificationByUserId() {
    this.notificationService.GetNotificationByUserId(this.user._id).subscribe(
      res => {
        this.events.publish('notification', res);
      }, err => {
        console.log(err);
      });
  }

  IziToast(user, msj, bColor) {
    this.iziToast.show({
      id: 'haduken',
      theme: 'dark',
      title: user.displayName,
      message: msj,
      position: 'bottomLeft',
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      progressBarColor: 'rgb(0, 255, 184)',
      image: user.avatar,
      imageWidth: 70,
      layout: 2,
      backgroundColor: bColor,
      onClosing: function () {
        console.log('onClosing');
      },
      onClosed: function (instance, toast, closedBy) {
        console.log('Closed | closedBy: ' + closedBy);
      }
    });

  }

  AllEvents() {
    this.socketservice.onSocket().subscribe(res => {
      const user = {
        displayName: res.user.displayName,
        avatar: res.user.avatar
      };

      switch (res.option) {
        case 'follower': {
          if (res.data.followerId === this.user._id) {
            // this.IziToast(user, 'Te ha seguido.', '#0275D8');
            this.IziToast(user, 'He has followed you.', '#0275D8');
          }
          break;
        }

        case 'like': {
          if (res.pubUserId === this.user._id) {
            if (res.data.userId === this.user._id) { return; }
            // this.IziToast(user, 'Te ha dado un like.', '#D9534F')
            this.IziToast(user, 'You have a like.', '#D9534F');
          }
        }
      }
    });

  }

}
