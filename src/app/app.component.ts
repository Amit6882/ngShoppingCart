import { Component, OnInit } from '@angular/core';
import { ProductService } from './product/product.service';
import { Products } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shopping Cart';
  productList: Products[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productList = this.productService.getproductList();
  }

}
