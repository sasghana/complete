import { Routes } from '@angular/router';
import { IssuetrackerComponent } from './issuetracker-user/issuetracker-user.component';

export const IssuetrackerRoutes: Routes = [{
    path: '', component: IssuetrackerComponent, data: { heading: 'Issuetracker', css: 'view-no-padding'}
}];
