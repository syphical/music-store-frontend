import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {Product} from '../models/Product';
import {RouterLink} from '@angular/router';

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

  addToCart() {
    this.productAdded.emit(this.product);
  }
}
