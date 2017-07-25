/**
 * Created by gaole on 2017/7/25.
 */
import {Component} from "@angular/core";
import {Product} from "../../product.model";
@Component({
  selector: 'product-row',
  inputs: ['product'],
  host: {'class': 'item'},
  template: `<product-image [product]="product"></product-image>
            <div class="content">
            <div class="header">{{product.name}}</div>
            <div class="meta">
                <div class="product-sku">SKU#{{product.sku}}</div>
</div>
<div class="description">
<product-department [product]="product"></product-department>
</div>
</div>
<price-display [price]="product.price"></price-display>
`
})

export class ProductRow {
  product: Product;
}

@Component({
  selector: 'product-department',
  inputs: ['product'],
  template: `<div class="product-department">
  <span *ngFor="let name of product.department; let i=index">
  <a href="#">{{name}}</a>
  <span>{{i<(product.department.length-1)? '>':''}}</span>
</span>
</div>`
})
export class ProductDepartment {
  product: Product;
}

@Component({
  selector: 'product-image',
  host: {class: "ui small image"},
  inputs: ['product'],
  template: `<img [src]="product.imageUrl" class="product-image">`
})
export class ProductImage {
  product: Product;
}

@Component({
  selector: 'price-display',
  inputs: ['price'],
  template: `<div class="price-display">{{price}}</div>`
})
export class PriceDispaly {
  price: number;
}


