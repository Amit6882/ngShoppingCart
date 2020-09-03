import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartProductComponent } from './cart-product/cart-product.component';

const routes: Routes = [
  { path: 'cart', component: CartProductComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartRoutingModule { }
