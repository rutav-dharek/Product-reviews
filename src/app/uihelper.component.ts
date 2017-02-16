import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard'
 
})
export class UIHelperComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .then(products => this.products = products.slice(1, 5));
  }
}

