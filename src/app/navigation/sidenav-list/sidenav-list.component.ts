import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Products } from 'src/app/product.model';
import { Utility } from '../../shared/utility';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Input() productList: Products[];

  constructor() {}

  ngOnInit() {}

  capitalizeFirstLetter(string: string) {
    return Utility.capitalizeFirstLetter(string);
  }
}
