import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-webshop-cart',
  imports: [],
  templateUrl: './webshop-cart.component.html',
  styleUrl: './webshop-cart.component.scss'
})
export class WebshopCartComponent {
  private cartService = inject(CartService);

  get cartItems() {
    return this.cartService.getCartItems();
  }
}
