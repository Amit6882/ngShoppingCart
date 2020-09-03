import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
    { path: 'product', redirectTo: '/product/all', pathMatch: 'full'},
    { path: '', redirectTo: '/product/all', pathMatch: 'full'},
    { path: 'product/:id', component: ProductListComponent }
    // TODO: Add Wildcard route for a 404 page
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]    
})
export class ProductRoutingModule {}