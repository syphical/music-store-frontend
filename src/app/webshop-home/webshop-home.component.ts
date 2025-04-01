import {Component, inject, OnInit, Signal} from '@angular/core';
import {WebshopHeaderComponent} from '../webshop-header/webshop-header.component';
import {ProductCardComponent} from '../product-card/product-card.component';
import {WebshopProductListComponent} from '../webshop-product-list/webshop-product-list.component';
import {AotwComponent} from '../aotw/aotw.component';
import {ProductService} from '../services/product.service';
import {Product} from '../models/Product';

@Component({
  selector: 'app-webshop-home',
  imports: [WebshopProductListComponent, AotwComponent],
  templateUrl: './webshop-home.component.html',
  styleUrl: './webshop-home.component.scss'
})
export class WebshopHomeComponent implements OnInit {
  private productService = inject(ProductService);
  public featuredProducts!: Signal<Product[]>;

  ngOnInit(): void {
    this.featuredProducts = this.productService.getFeaturedProducts(6);
  }
}
