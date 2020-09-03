import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { SubCategory } from 'src/app/product.model';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  products: SubCategory[];

  constructor(private cartService: CartService, private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.cartService.addedProduct.filter(item => item.num > 0);
    
    console.log('Cart Component Init!!!', this.cartService.addedProduct);
    
    this.cartService.cartProduct$.subscribe(product => {
      this.products = product;
      console.log('cart subscribe', this.products);
      }
    );
  }

  removeAll(){
    this.products = [];
    this.productService.cartProductAdded = [];
  }

  add(prod){
    console.log(prod);
  }

  remove(prod){
    console.log(prod);
  }

}
