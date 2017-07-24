import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {InventoryApp} from './app.component';
import {ProductList} from "./product_list/product-list.component";

@NgModule({
  declarations: [
    InventoryApp,
    ProductList
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [InventoryApp]
})
export class AppModule {
}
