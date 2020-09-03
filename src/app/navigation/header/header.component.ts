import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  total$: Observable<number>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.total$ = this.productService.total$;
  }
}
