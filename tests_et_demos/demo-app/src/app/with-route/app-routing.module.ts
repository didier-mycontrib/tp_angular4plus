import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SubspaceMainComponent } from './subspace/subspace-main/subspace-main.component';
import { WelcomeComponent } from "./welcome/welcome.component";
import { ProdListComponent } from "./subspace/prod-list/prod-list.component";
import { ProdDetailComponent } from "./subspace/prod-detail/prod-detail.component";

/*
NB: la partie avec children peut être paramétrée ici ou
bien dans le sous module subspace avec un enregistrement via RouterModule.forChild()
et avec les exports/imports nécessaires de sous modules vers modules parents

----
syntaxe redirect dans sous niveau (children):

{ path: '', redirectTo: 'xyz', pathMatch: 'prefix'},
{ path: 'xyz', component: XyzComponent } ,

*/

const routes: Routes = [
{ path: 'welcome', component: WelcomeComponent },
{ path: '', redirectTo: '/welcome', pathMatch: 'full'},
{ path: 'login', component: LoginComponent } /*,
{ path: 'subspace-main/:id' ,component: SubspaceMainComponent 
children: [
    { path: '', component: ProdListComponent },
    { path: 'details/:num', component: ProdDetailComponent }
  ]
}*/
];
@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule {}