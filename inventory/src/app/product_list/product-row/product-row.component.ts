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
</div>
`
})

class ProductRow{
  product:Product;
}

@Component({
  selector:'product-image',
  host:{class:"ui small image"},
  inputs:['product'],
  template:`<img [src]="product.imageUrl" class="product-image">`
})

class ProductImage{
  product:Product;
}

