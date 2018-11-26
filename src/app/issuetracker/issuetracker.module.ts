import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {FullscreenOverlayContainer, OverlayContainer} from '@angular/cdk/overlay';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';
import {PortalModule} from '@angular/cdk/portal';
import {LayoutModule} from '@angular/cdk/layout';

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
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';
import { IssuetrackerComponent } from './issuetracker-user/issuetracker-user.component';
import { IssuetrackerRoutes } from './issuetracker.routing';
import { IssuetrackerService } from './issuetracker.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(IssuetrackerRoutes),
    NgxDatatableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,

    LayoutModule,
    CdkTableModule,
    A11yModule,
    BidiModule,
    CdkAccordionModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule
  ],
  declarations: [
    IssuetrackerComponent
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer},
    IssuetrackerService
  ]
})
export class IssuetrackerModule { }
