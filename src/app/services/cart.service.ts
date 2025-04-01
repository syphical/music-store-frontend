import { Injectable, signal } from "@angular/core";
import { Product } from "../models/Product";
import {delay, Observable, of} from 'rxjs';

export interface CartItem {
  product: Product;
  quantity: number;
}


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  constructor() {
    this.loadCartFromLocalStorage();
  }

  public getCartItems() {
    return this.cartItems;
  }

  public addToCart(product: Product): void {
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

    this.saveCartToLocalStorage();
  }

  public removeFromCart(productId: number): void {
    const currentItems = this.cartItems();
    const updatedItems = currentItems.filter(item => item.product.id !== productId);
    this.cartItems.set(updatedItems);
    this.saveCartToLocalStorage();
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems()));
  }

  private loadCartFromLocalStorage(): void {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      this.cartItems.set(JSON.parse(savedCart));
    }
  }

  public calculateTotal(): number {
    return this.cartItems().reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  public clearCart(): void {
    this.cartItems.set([]);
    this.saveCartToLocalStorage();
  }

  public checkout(): Observable<any> {
    return of({ success: true, orderId: Math.floor(Math.random() * 1000) }).pipe(
      delay(1000)
    );
  }
}
