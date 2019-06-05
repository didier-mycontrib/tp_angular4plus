import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConversionComponent } from './conversion/conversion.component';
import { DeviseComponent } from './devise/devise.component';

const routes: Routes = [
  { path: 'conversion' , component: ConversionComponent },
  { path: 'devise' , component: DeviseComponent },
  { path: '', redirectTo: '/conversion', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
