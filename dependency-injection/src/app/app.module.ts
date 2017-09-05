import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppInjectorComponent, MyService, ParamService} from "./injector/injector.component";

@NgModule({
  declarations: [
    AppComponent,
    AppInjectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:MyService,useClass:MyService},
    {provide:ParamService,useFactory:():ParamService=>new ParamService('YOLO')},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
