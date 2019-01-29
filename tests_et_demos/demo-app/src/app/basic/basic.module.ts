import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleComponent } from './simple/simple.component';
import { MySwitchComponent } from './my-switch.component';
import { FormsModule } from '@angular/forms';
import { InOutLifeCycleComponent } from './in-out-life-cycle/in-out-life-cycle.component';
import { MyChildComponent } from './my-child/my-child.component';
import { WithFormComponent } from './with-form/with-form.component';
import { WithFilterComponent } from './with-filter/with-filter.component';
import { WithServiceComponent } from './with-service/with-service.component';
import { MySortByPipe } from './with-filter/my-sort-by.pipe';
import { UtilModule } from "../../util/util.module";

@NgModule({
  imports: [
    CommonModule , FormsModule , UtilModule
  ],
  exports: [
    MySwitchComponent
  ],
  declarations: [  MySwitchComponent , SimpleComponent, InOutLifeCycleComponent, MyChildComponent, WithFormComponent, WithFilterComponent, WithServiceComponent, MySortByPipe]
})
export class BasicModule { }
