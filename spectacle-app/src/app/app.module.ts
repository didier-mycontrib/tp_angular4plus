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


const routes: Routes = [
  { path: 'ngr/welcome', component: WelcomeComponent },
  { path: 'ngr/spectacle', component: SpectacleComponent },
  { path: 'ngr/client', component: ClientComponent },
  { path: 'ngr/reservation', component: ReservationComponent },
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
    ReservationComponent
  ],
  imports: [
    BrowserModule , FormsModule, BsUtilModule, NgbModule.forRoot() ,
     RouterModule.forRoot(routes) , HttpClientModule
  ],
  providers: [SpectacleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
