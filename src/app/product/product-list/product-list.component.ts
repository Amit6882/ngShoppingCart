import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Products, SubCategory } from 'src/app/product.model';
import Utility from '../../shared/utility';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  selectedCategory: string;
  productList: Products[] = [];
  product: Products;
  productInCart: SubCategory[] = [];
  displayProduct: SubCategory[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    if(this.productService.cartProductAdded.length){
      this.productInCart = this.productService.cartProductAdded;
    }else{
      this.productInCart = [];
      this.cartService.addedProduct = [];
    }
    console.log('Product Component Init!!!', this.productInCart);
    
    // get product list from service
    this.productList = this.productService.getproductList();
    // this.productList = JSON.parse(JSON.stringify(this.productList));

    // subscribe to latest navigation from route params
    this.route.paramMap.subscribe((params: any) => {

      this.selectedCategory = Utility.capitalizeFirstLetter(params.params.id);
      this.displayProduct = [];

      // set selected product by name
      if (this.selectedCategory !== 'All') {
        this.product = this.productList.find(
          (item) => item.name === params.params.id
        );

        for(let i in this.product.subCategory){
          this.displayProduct.push(this.product.subCategory[i]);
        }
        // this.displayProduct.push(this.product);
        //console.log('Product', this.displayProduct);
      } else {
        for( let x in this.productList){
          for(let y in this.productList[x].subCategory){
            this.displayProduct.push(this.productList[x].subCategory[y]);
          }
        }

        // If cart is empty reset product num property
        if(this.productInCart.length === 0){
          console.log(this.displayProduct.forEach(item => item.num = 0));
        }
      }
    });
  }

  // add array items to cart array and display in template
  addProductToCart(product: SubCategory) {
    // check if product exists in cart
    const existing = this.productInCart.find(
      ({ name }) => product.name === name
    );
    // console.log(existing);

    // if exists add +1 in quantity
    if (existing) {
      existing.num += 1;
      this.cartService.cartProduct$.next(this.productInCart);
      return;
    }

    product.num = 1;
    this.productInCart.push(product);
    // console.log(this.productInCart);
    
    this.productService.cartProductAdded = this.productInCart; // hold cart product temp
    this.cartService.addedProduct = this.productInCart;
    this.cartService.cartProduct$.next(this.productInCart);
  }

  removeProductToCart(product: SubCategory){
    this.productInCart.filter(item => {
        if(product.name === item.name){
          return product.num? product.num--: product.num;
        } 
    })
  }
  
}
