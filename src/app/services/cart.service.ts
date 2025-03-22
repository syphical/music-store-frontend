import { Injectable, signal } from "@angular/core";
import { Product } from "../models/Product";

export interface CartItem {
  product: Product;
  quantity: number;
}


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  getCartItems () {
    return this.cartItems;
  }

  addToCart(product: Product) {
    const currentItems = this.cartItems();
    const existingItem = currentItems.findIndex(item => item.product.id === product.id);

    if (existingItem !== -1) {
      const updatedItems = [...currentItems];
      updatedItems[existingItem] = {
        ...updatedItems[existingItem],
        quantity: updatedItems[existingItem].quantity + 1
      };
      this.cartItems.set(updatedItems);
    } else {
      this.cartItems.set([...currentItems, { product, quantity: 1}]);
    }
  }

  getCartItemCount () {
    return this.cartItems().reduce((count, item) => count + item.quantity, 0);
  }
}
