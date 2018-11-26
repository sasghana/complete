import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatProgressBarModule,
  MatDialogModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { FullcalendarRoutes } from './fullcalendar.routing';
import {
  FullcalendarComponent,
  CalendarDialogComponent
} from './fullcalendar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FullcalendarRoutes),
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatProgressBarModule,
    MatDialogModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlexLayoutModule
  ],
  declarations: [FullcalendarComponent, CalendarDialogComponent],
  entryComponents: [CalendarDialogComponent]
})
export class FullcalendarModule {}
