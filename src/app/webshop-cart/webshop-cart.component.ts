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
  protected checkoutError: string | null = null;
  protected isLoading = false;

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
    this.isLoading = true;
    this.checkoutError = null;

    this.cartService.checkout().subscribe({
      next: (response) => {
        this.checkoutSuccess = true;
        this.isLoading = false;
      },
      error: (error) => {
        this.checkoutError = 'Er is iets misgegaan bij het afrekenen. Probeer het later opnieuw.';
        this.isLoading = false;
        console.error('Checkout error:', error);
      }
    });
  }
}
