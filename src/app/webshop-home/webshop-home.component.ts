import { Component } from '@angular/core';
import {WebshopHeaderComponent} from '../webshop-header/webshop-header.component';
import {ProductCardComponent} from '../product-card/product-card.component';
import {WebshopProductListComponent} from '../webshop-product-list/webshop-product-list.component';

@Component({
  selector: 'app-webshop-home',
  imports: [WebshopProductListComponent],
  templateUrl: './webshop-home.component.html',
  styleUrl: './webshop-home.component.scss'
})
export class WebshopHomeComponent {

}
