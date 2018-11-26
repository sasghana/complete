import { Routes } from '@angular/router';

import { ClaimsformComponent } from './claimsform-user/claimsform-user.component';

export const ClaimsformRoutes: Routes = [{
  path: '', component: ClaimsformComponent, data: { heading: 'claimsform', css: 'view-no-padding' }
}];
