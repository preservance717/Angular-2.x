import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {InventoryApp} from './app.component';
import {ProductList} from "./product_list/product-list.component";
import {
  ProductRow, ProductDepartment, ProductImage,
  PriceDispaly
} from "./product_list/product-row/product-row.component";

@NgModule({
  declarations: [
    InventoryApp,
    ProductList,
    ProductRow,
    ProductImage,
    ProductDepartment,
    PriceDispaly
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [InventoryApp]
})
export class AppModule {
}
