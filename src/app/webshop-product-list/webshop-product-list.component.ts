import {Component, inject, OnInit, Signal} from '@angular/core';
import {ProductCardComponent} from '../product-card/product-card.component';
import {ProductService} from '../services/product.service';
import {Product} from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-webshop-product-list',
  imports: [
    ProductCardComponent
  ],
  templateUrl: './webshop-product-list.component.html',
  styleUrl: './webshop-product-list.component.scss'
})
export class WebshopProductListComponent implements OnInit {
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  public products!: Signal<Product[]>;

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onProductAdded(product: Product) {
    this.cartService.addToCart(product);
    console.log("Added to cart:", product);
  }
}
