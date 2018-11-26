import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatProgressBarModule,
  MatMenuModule,
  MatTableModule,
  MatSnackBarModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgmCoreModule } from '@agm/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NguCarouselModule } from '@ngu/carousel';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { HomePageSliderComponent } from './HomePageSlider/HomePageSlider.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    MatTableModule,
    MatSnackBarModule,
    AgmCoreModule,
    FlexLayoutModule,
    NgxChartsModule,
    NguCarouselModule
  ],
  declarations: [DashboardComponent, HomePageSliderComponent]
})
export class DashboardModule {}
