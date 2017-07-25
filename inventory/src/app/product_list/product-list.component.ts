/**
 * Created by gaole on 2017/7/24.
 */
import {Component, EventEmitter} from "@angular/core";
import {Product} from "../product.model";
@Component({
  selector: 'product-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `<div class="ui items">
<product-row *ngFor="let myProduct of productList">
{{myProduct.name}}
</product-row>
</div>`
})
export class ProductList {
  productList: Product[];
  onProductSelected: EventEmitter<Product>;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }
}
