import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatCheckboxModule,
  MatTableModule,
  MatGridListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSelectModule,
  MatListModule,
  MatSortModule,
  MatTabsModule,
  MatSnackBarModule,
  MatStepperModule, MatTooltipModule, MatNativeDateModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import {LeaveformRoutes} from './leaveform.routing';
import { LeaveformComponent } from './leaveform.component';

import 'hammerjs';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LeaveformRoutes),
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
    MatCheckboxModule,
    MatChipsModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LeaveformComponent
  ],
})

export class LeaveformModule {}
