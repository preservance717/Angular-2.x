import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SwitchComponent} from "./switch/switch.component";
import {SimpleHttpComponent} from "./simple_http/simple-http.component";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    SimpleHttpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
