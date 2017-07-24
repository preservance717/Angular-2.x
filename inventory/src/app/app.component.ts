import {Component} from '@angular/core';
import {Product} from "./product.model";

@Component({
  selector: 'inventory-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class InventoryApp {
  products: Product[];

  constructor() {
    this.products = [
      new Product('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'], 29.99),
      new Product('NEATo', 'Blue Jacket', '/resources/images/products/blue-jacket.jpg',
        ['Women', 'Accessories', 'Hats'], 189.99),
      new Product('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'], 29.99)
    ];
  }

  productSelected(product: Product) {
    console.log("Product clicked", product);
  }
}
