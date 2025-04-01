import {Component, inject, OnInit, signal} from '@angular/core';
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
  public featuredProducts = signal<Product[]>([]);

  ngOnInit(): void {
    this.loadFeaturedProducts();
  }

  private loadFeaturedProducts(): void {
    this.productService.fetchProducts().subscribe(products => {
      const featured = products.slice(0, 6);
      this.featuredProducts.set(featured);
    });
  }
}
