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
  protected isLoading = false;
  error: string | null = null;

  ngOnInit(): void {
    this.loadFeaturedProducts();
  }

  protected loadFeaturedProducts() {
    this.isLoading = true;
    this.error = null;

    this.productService.fetchProducts().subscribe({
      next: (products) => {
        this.featuredProducts.set(products.slice(0, 6));
        this.isLoading = false;
      },
      error: (err) => {
        this.error = "Kon de aanbevolen producten niet laden. Probeer het later opnieuw.";
        this.isLoading = false;
        console.error("Error loading featured products:", err);
      }
    });
  }
}
