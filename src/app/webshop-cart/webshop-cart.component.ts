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
  protected checkoutSuccess = false;
  protected checkoutError = '';

  get cartItems() {
    return this.cartService.getCartItems();
  }

  get totalCost() {
    return this.cartService.calculateTotal();
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  checkout(): void {
    if (this.cartItems().length === 0) {
      this.checkoutError = "Je winkelwagen is leeg";
      return;
    }

    console.log("Checkout", this.cartItems());
    console.log("Cost", this.totalCost);

    this.checkoutSuccess = true;
    this.cartService.clearCart();
  }
}
