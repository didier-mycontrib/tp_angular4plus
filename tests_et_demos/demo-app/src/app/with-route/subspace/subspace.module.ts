import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubspaceMainComponent } from './subspace-main/subspace-main.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdDetailComponent } from './prod-detail/prod-detail.component';
import { SubspaceRoutingModule } from './subspace-routing.module';
import { ProdService } from "./prod.service";

@NgModule({
  imports: [
    CommonModule , SubspaceRoutingModule
  ],
  exports: [
    SubspaceRoutingModule
  ],
  providers:[ProdService]
  ,
  declarations: [SubspaceMainComponent, ProdListComponent, ProdDetailComponent]
})
export class SubspaceModule { }
