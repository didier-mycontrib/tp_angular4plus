import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { SubspaceMainComponent } from './subspace-main/subspace-main.component';
const routes: Routes = [
    { path: 'subspace-main/:id' ,component: SubspaceMainComponent ,
         children: [
            { path: '', component: ProdListComponent },
            { path: 'details/:num', component: ProdDetailComponent }
          ]
      }
];
@NgModule({
imports: [ RouterModule.forChild(routes) ],
exports: [ RouterModule ]
})
export class SubspaceRoutingModule {}