import { Routes } from '@angular/router';

import {LeaveformComponent} from './leaveform.component';

export const LeaveformRoutes: Routes = [{
  path: '', component: LeaveformComponent, data: {
    heading: 'leaveform',
    css: 'view-no-padding'
  }
}];
