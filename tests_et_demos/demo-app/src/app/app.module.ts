
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent} from './app.component';
import { HttpModule } from "@angular/http";
import { BasicModule } from './basic/basic.module';
import { WithRouteModule } from './with-route/with-route.module';
import { UtilModule } from "../util/util.module";

@NgModule({
  imports:      [ BrowserModule , FormsModule , HttpModule , UtilModule, BasicModule , WithRouteModule],
  declarations: [ AppComponent ],
  providers:    [  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}