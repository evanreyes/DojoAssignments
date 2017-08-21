import { Component, OnInit } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {
  new_product: Product = new Product();
  products: Array<Product>;

  constructor() { }

  ngOnInit() {
    this.new_product = new Product();

  }

  create(){
  this.products.push(this.new_product);
  }
}
