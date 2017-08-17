import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SwitchComponent} from "./switch/switch.component";
import {SimpleHttpComponent} from "./simple_http/simple-http.component";
import {HttpModule} from "@angular/http";
import {Routes, RouterModule} from "@angular/router";
import {PopComponent} from "./pop/pop.component";
import {StyleComponent} from "./style/style.component";

const appRoutes: Routes = [
  { path: 'switch', component: SwitchComponent },
  { path: 'simple', component: SimpleHttpComponent},
  { path: 'style', component: StyleComponent},
  { path: 'pop', component: PopComponent,outlet:'popup'}

];
@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    SimpleHttpComponent,
    PopComponent,
    StyleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
