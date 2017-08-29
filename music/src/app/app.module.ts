import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {Routes, RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from "@angular/common";

const appRoutes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: 'search', pathMatch: 'full'}
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
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
