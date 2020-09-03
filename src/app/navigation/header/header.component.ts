import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  total = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.total$.subscribe(total => {
      console.log(total);
      this.total = total;
    })
  }
}
