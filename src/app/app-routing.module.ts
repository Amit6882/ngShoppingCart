import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  // { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
 