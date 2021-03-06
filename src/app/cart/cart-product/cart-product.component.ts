import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/product.model';
import { ProductService } from 'src/app/product/product.service';
import { Utility } from '../../shared/utility';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  products: SubCategory[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.cart.filter(item => item.num > 0);
  }

  removeAll(){
    this.products = [];
    this.productService.cart = [];
  }

  add(prod: SubCategory){
    prod.num += 1;
  }  

  remove(prod: SubCategory){
    prod.num--;
    if(prod.num === 0){
      this.products = this.products.filter(item => item.num > 0);
    }
  }

  calcTotal() {
    let total = Utility.totalCartItemsCount(this.products);
    this.productService.total$.next(total);
    return total;    
  }

  calcTotalPrice(){
    return this.products.reduce((acc, pr) => acc+= pr.price* pr.num , 0).toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  }
}
