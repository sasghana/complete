import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatListModule,
  MatGridListModule,
  MatMenuModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatTabsModule,
  MatDialogModule,
  MatExpansionModule,
  MatChipsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SocialRoutes } from './social.routing';
import { SocialComponent } from './social.component';
import { ProfileComponent} from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SocialRoutes),
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatChipsModule,
    FormsModule
  ],
  declarations: [
    SocialComponent,
    ProfileComponent
  ]
})
export class SocialModule {}
