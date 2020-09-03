import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductService } from './product/product.service';
import { CartModule } from './cart/cart.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    CartModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
