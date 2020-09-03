import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [ProductListComponent],
  imports: [
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
