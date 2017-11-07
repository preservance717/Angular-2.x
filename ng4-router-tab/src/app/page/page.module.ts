/**
 * Created by gaole on 2017/11/6.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule, RouteReuseStrategy} from "@angular/router";

import {PageComponent} from "./page.component";
import {NewsComponent} from './news/news.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {SimpleReuseStrategy} from "./simple-reuse-strategy";
import { HomeComponent } from './home/home.component';

const pageRoutes: Routes = [
  {
    path: '',
    component: PageComponent,
    children:[
      {path: '', redirectTo: 'home', pathMatch: 'full',},
      {path: 'home', component: HomeComponent, data: {title: '首页', module: 'home', power: 'SHOW'}},
      {path: 'news', component: NewsComponent, data: {title: '新闻管理', module: 'news', power: 'SHOW'}},
      {path: 'contact', component: ContactComponent, data: {title: '联系我们', module: 'contact', power: 'SHOW'}},
      {path: 'about', component: AboutComponent, data: {title: '关于我们', module: 'about', power: 'SHOW'}}
    ]
  },
];

@NgModule({
  declarations: [
    PageComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pageRoutes)
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: SimpleReuseStrategy}
  ],
})

export class PageModule {

}
