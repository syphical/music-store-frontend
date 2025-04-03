import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';
import {CurrencyPipe} from '@angular/common';
import {OrderItem} from '../models/OrderItem';
import {Order} from '../models/Order';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-webshop-cart',
  imports: [
    CurrencyPipe,
    TranslatePipe
  ],
  templateUrl: './webshop-cart.component.html',
  styleUrl: './webshop-cart.component.scss'
})
export class WebshopCartComponent {
  private cartService = inject(CartService);
  private httpClient = inject(HttpClient);
  private router = inject(Router);
  private translateService = inject(TranslateService);
  protected checkoutSuccess = false;
  protected checkoutError: string | null = null;
  protected isLoading = false;

  protected getImagePath(productId: any): string {
    return "../../assets/" + productId + ".webp";
  }

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

    let orderItemList: OrderItem[] = [];
    for (const item of this.cartItems()) {
      const orderItem: OrderItem = {
        productName: item.product.name,
        productPrice: item.product.price,
        quantity: item.quantity,
        productId: item.product.id,
      };
      orderItemList.push(orderItem);
    }

    const order: Order = {
      totalAmount: this.totalCost,
      products: orderItemList,
    };

    this.httpClient.post<string>(environment.apiUrl + "/orders", order).subscribe({
      next: result => {
        this.checkoutSuccess = true;
        this.isLoading = false;
        this.cartService.clearCart();
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 5000)
      },
      error: error => {
        this.translateService.get('CART.CHECKOUT_ERROR').subscribe(text => {
          this.checkoutError = text;
        });
        this.isLoading = false;
        console.error('Checkout error:', error);
      }
    });
  }
}
