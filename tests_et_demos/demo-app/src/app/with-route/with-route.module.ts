import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { SubspaceModule } from "./subspace/subspace.module";

@NgModule({
  imports: [
    CommonModule , AppRoutingModule , SubspaceModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [WelcomeComponent, LoginComponent, MainComponent]
})
export class WithRouteModule { }
