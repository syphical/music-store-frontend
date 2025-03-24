import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {Product} from '../models/Product';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({required: true}) public product!: Product;
  @Output() productAdded = new EventEmitter<Product>();
  private router = inject(Router);

  addToCart() {
    this.productAdded.emit(this.product);
  }

  openDetails(product: Product) {
    this.router.navigate(['/products', product.id]);
  }
}
