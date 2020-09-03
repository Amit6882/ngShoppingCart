import { NgModule } from '@angular/core';

import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CartProductComponent } from './cart-product/cart-product.component';



@NgModule({
  declarations: [CartProductComponent],
  imports: [
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule { }
