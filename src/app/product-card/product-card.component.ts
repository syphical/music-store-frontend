import {Component, inject, Input} from '@angular/core';
import {CurrencyPipe, NgOptimizedImage} from '@angular/common';
import {Product} from '../models/Product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-card',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  // @Input() prijs!: string;
  // @Input() imagePath!: string;
  // @Input() naam!: string;
  // @Input() beschrijving!: string;


  @Input({required: true}) public product!: Product;

}
