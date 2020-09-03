import { Injectable } from '@angular/core';
import { Products, SubCategory } from '../product.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class ProductService{
    
    constructor(){}
    total$ = new BehaviorSubject<number>(0);
    cart: SubCategory[] = [];

    private productList: Products[] = [
        {
            name: 'vegetables', 
            subCategory: [
                { name: 'potato', price: 10 },
                { name: 'Spinach', price: 20 }
            ]
        },
        {
            name: 'fruits', 
            subCategory: [
                { name: 'Apple', price: 30 },
                { name: 'Orange', price: 40 }
            ]
        }
      ];

      getproductList() {
        return [...this.productList];
        // this.productList.slice();
      }
}