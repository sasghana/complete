import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// Angular Material
import {
  MatSidenavModule,
  MatMenuModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatTooltipModule,
  MatListModule,
  MatProgressBarModule,
  MatSelectModule
} from '@angular/material';
// Angular Flexlayout
import { FlexLayoutModule } from '@angular/flex-layout';
// ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// ngx-loading-bar
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
// ngx-perfect-scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// google maps
import { AgmCoreModule } from '@agm/core';
import { NguCarouselModule } from '@ngu/carousel';

// Template core components
import {
  MenuComponent,
  HeaderComponent,
  SidebarComponent,
  AdminLayoutComponent,
  AuthLayoutComponent,
  OptionsComponent,
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './core';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MomentModule } from 'angular2-moment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgProgressModule } from '@ngx-progressbar/core';
import { FilterUserPipeModule } from './shared/pipes/filteruser.pipe';

//#region Other settings
import { environment } from '../environments/environment';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import * as moment from 'moment';
import { FormValidate } from './shared/utils/formvalidate.util';

moment.locale('es');
library.add(fas, far);
//#endregion

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import {SharedModule} from './shared/shared.module';
import {AuthGuard} from './account/auth.guard';
import {Events} from 'ionic-angular';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MenuComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    OptionsComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: createTranslateLoader, deps: [HttpClient] }
    }),
    MatSidenavModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    MatListModule,
    MatSelectModule,
    MatProgressBarModule,
    FlexLayoutModule,
    LoadingBarRouterModule,
    LoadingBarModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAsQi8vzHfqrt33xQww77MN1Bg84iLSeOM'}),
    PerfectScrollbarModule,
    SharedModule,
    NguCarouselModule,
    Ng2IziToastModule,
    MomentModule,
    InfiniteScrollModule,
    NgProgressModule.forRoot(),
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    AuthGuard,
    Events
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
