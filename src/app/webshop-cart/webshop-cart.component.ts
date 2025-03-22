import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-webshop-cart',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './webshop-cart.component.html',
  styleUrl: './webshop-cart.component.scss'
})
export class WebshopCartComponent {
  private cartService = inject(CartService);

  get cartItems() {
    return this.cartService.getCartItems();
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }
}
