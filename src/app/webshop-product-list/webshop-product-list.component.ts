import {Component, inject, Input, OnInit, signal, Signal} from '@angular/core';
import {ProductCardComponent} from '../product-card/product-card.component';
import {ProductService} from '../services/product.service';
import {Product} from '../models/Product';
import { CartService } from '../services/cart.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-webshop-product-list',
  imports: [
    ProductCardComponent,
    TranslatePipe
  ],
  templateUrl: './webshop-product-list.component.html',
  styleUrl: './webshop-product-list.component.scss'
})
export class WebshopProductListComponent implements OnInit {
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  public categoryName: string = "";
  @Input() products: Signal<Product[]> = signal([]);
  @Input() isFeatured: boolean = false;

  ngOnInit(): void {
    if (!this.isFeatured) {
      this.route.queryParams.subscribe(params => {
        this.categoryName = params["category"] || "HEADER.ALL_PRODUCTS";
        this.loadProductsByCategory();
      });
    }
  }

  private loadProductsByCategory(): void {
    if (this.categoryName === "HEADER.ALL_PRODUCTS") {
      this.products = this.productService.getProducts();
    } else {
      this.products = this.productService.getProductsByCategory(this.categoryName);
    }
  }

  onProductAdded(product: Product): void {
    this.cartService.addToCart(product);
    console.log("Added to cart:", product);
    this.router.navigate(["/cart"])
  }
}
