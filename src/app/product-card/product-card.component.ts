import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {Product} from '../models/Product';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe,
    RouterLink,
    TranslatePipe
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({required: true}) public product!: Product;
  @Output() productAdded = new EventEmitter<Product>();

  protected addToCart(): void {
    this.productAdded.emit(this.product);
  }

  protected getImagePath(productId: any): string {
    return "../../assets/" + productId + ".webp";
  }
}
