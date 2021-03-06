import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TreeModule} from 'angular-tree-component';

import {AppComponent} from './app.component';
import {SwitchComponent} from "./switch/switch.component";
import {SimpleHttpComponent} from "./simple_http/simple-http.component";
import {HttpModule} from "@angular/http";
import {Routes, RouterModule} from "@angular/router";
import {PopComponent} from "./pop/pop.component";
import {StyleComponent} from "./style/style.component";
import {NgxTreeComponent} from './ngx-tree/ngx-tree.component';
import {ContextMenuModule} from 'ngx-contextmenu';
import { NgxCMComponent } from './ngx-c-m/ngx-c-m.component';

const appRoutes: Routes = [
  {path: 'switch', component: SwitchComponent},
  {path: 'simple', component: SimpleHttpComponent},
  {path: 'style', component: StyleComponent},
  {path: 'tree', component: NgxTreeComponent},
  {path: 'pop', component: PopComponent, outlet: 'popup'},
  {path: 'cmenu', component: NgxCMComponent},
  {path: '', redirectTo: 'cmenu', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    SimpleHttpComponent,
    PopComponent,
    StyleComponent,
    NgxTreeComponent,
    NgxCMComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TreeModule,
    ContextMenuModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
