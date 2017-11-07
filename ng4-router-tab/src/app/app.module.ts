import { BrowserModule } from '@angular/platform-browser';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import {PageModule} from "./page/page.module";

const routes: Routes = [
  {path: '', redirectTo: 'page', pathMatch: 'full'},
  { path: '**', redirectTo: 'page' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
