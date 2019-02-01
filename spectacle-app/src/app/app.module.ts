import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { FormsModule } from "@angular/forms";
import { WelcomeComponent } from './welcome/welcome.component';
import { BsUtilModule } from "src/bs-util/bs-util.module";
import { SpectacleComponent } from './spectacle/spectacle.component';
import { ClientComponent } from './client/client.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SpectacleService } from "src/app/common/service/spectacle.service";
import { AdminSpectacleComponent } from './admin-spectacle/admin-spectacle.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { SharedServiceForUserSession } from "src/app/common/service/shared-service-for-user-session";
import { AdminSpectacleService } from "src/app/common/service/admin-spectacle.service";
import { AdminSpaceComponent } from './admin-space/admin-space.component';
import { CustomerSpaceComponent } from './customer-space/customer-space.component';
import { AuthService } from "src/app/common/security-service/auth.service";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyAuthInterceptor } from 'src/app/common/security-service/my-auth-interceptor';

const routes: Routes = [
  { path: 'ngr/welcome', component: WelcomeComponent },
  { path: 'ngr/spectacle', component: SpectacleComponent },
  { path: 'ngr/admin', component: AdminSpaceComponent },
  { path: 'ngr/customer/:action', component: CustomerSpaceComponent },
  { path: '', redirectTo: '/ngr/welcome', pathMatch: 'full'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    MyFooterComponent,
    WelcomeComponent,
    SpectacleComponent,
    ClientComponent,
    ReservationComponent,
    AdminSpectacleComponent,
    LoginAdminComponent,
    AdminSpaceComponent,
    CustomerSpaceComponent
  ],
  imports: [
    BrowserModule , FormsModule, BsUtilModule, NgbModule.forRoot() ,
     RouterModule.forRoot(routes) , HttpClientModule
  ],
  providers: [SpectacleService, AdminSpectacleService, SharedServiceForUserSession, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
