import { Injectable } from '@angular/core';
import { SubCategory } from '../product.model';
import { Subject } from 'rxjs';

@Injectable()
export class CartService{
    cartProduct$ = new Subject<SubCategory[]>();
    addedProduct: SubCategory[] = [];

    constructor(){}  
    
     
    cartProduct(v: SubCategory[]) {
        console.log('cart service', v);
        this.cartProduct$.next(this.addedProduct);
    }
}