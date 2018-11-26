import { Routes } from '@angular/router';

import { SocialComponent } from './social.component';
import {ProfileComponent} from './profile/profile.component';

export const SocialRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: SocialComponent, data: { heading: 'Social', css: 'view-no-padding'}},
      { path: 'profile', component: ProfileComponent, data: { heading: 'Profile' , css: 'view-no-padding'} }
    ]
  }
];
