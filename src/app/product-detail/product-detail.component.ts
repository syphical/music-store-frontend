import {Component, inject, input, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/Product';
import {CurrencyPipe} from '@angular/common';
import {CartService} from '../services/cart.service';
import {FormsModule} from '@angular/forms';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-product-detail',
  imports: [
    CurrencyPipe,
    FormsModule,
    TranslatePipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  protected product?: Product;
  protected quantity: number = 1;
  protected quantityOptions = [1, 2, 3, 4, 5];

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private router = inject(Router);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.productService.getProductById(id).subscribe(data => {
        this.product = data;
        console.log(this.product);
      });
    }
  }

  protected getImagePath(productId: any): string {
    return "../../assets/" + productId + ".webp";
  }

  protected addToCart() {
    if (this.product) {
      for (let i = 0; i < this.quantity; i++) {
        this.cartService.addToCart(this.product);
      }
      console.log('Added to cart:', this.product);
      this.router.navigate(["/cart"])
    }
  }
}
