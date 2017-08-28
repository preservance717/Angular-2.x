import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {Routes, RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";

const appRoutes: Routes = [
  {path: '', component: SearchComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
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
