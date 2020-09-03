import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Products, SubCategory } from 'src/app/product.model';
import Utility from '../../shared/utility';

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
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productList = this.productService.getproductList();

    if (this.productService.cart.length) {
      this.productInCart = this.productService.cart;
    } else {
      this.productInCart = [];
    }

    console.log('Product Component Init!!!', this.productInCart);

    // subscribe to latest navigation from route params
    this.route.paramMap.subscribe((params: any) => {
      this.selectedCategory = Utility.capitalizeFirstLetter(params.params.id);
      this.displayProduct = [];

      // set selected product by name
      if (this.selectedCategory !== 'All') {
        this.product = this.productList.find(
          (item) => item.name === params.params.id
        );

        for (let i in this.product.subCategory) {
          this.displayProduct.push(this.product.subCategory[i]);
        }
      } else {
        for (let x in this.productList) {
          for (let y in this.productList[x].subCategory) {
            this.displayProduct.push(this.productList[x].subCategory[y]);
          }
        }

        // If cart is empty reset product num property
        if (this.productInCart.length === 0) {
          this.displayProduct.forEach((item) => (item.num = 0));
        }
      }
    });
  }

  addProductToCart(product: SubCategory) {
    const existing = this.productInCart.find(
      ({ name }) => product.name === name
    );

    if (existing) {
      existing.num += 1;
      return;
    }

    product.num = 1;
    this.productInCart.push(product);

    this.productService.cart = this.productInCart;
  }

  removeProductToCart(product: SubCategory) {
    return product.num > 0 ? product.num--: product.num;
  }
}
