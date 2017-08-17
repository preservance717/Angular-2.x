import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SwitchComponent} from "./switch/switch.component";
import {SimpleHttpComponent} from "./simple_http/simple-http.component";
import {HttpModule} from "@angular/http";
import {Routes, RouterModule} from "@angular/router";
import {PopComponent} from "./pop/pop.component";

const appRoutes: Routes = [
  { path: 'switch', component: SwitchComponent },
  { path: 'simple', component: SimpleHttpComponent},
  { path: 'pop', component: PopComponent,outlet:'popup'},
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    SimpleHttpComponent,
    PopComponent
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
