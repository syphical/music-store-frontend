import {Injectable, signal} from '@angular/core';
import {Product} from '../models/Product';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = "http://localhost:8080/api/products";
  private products = signal<Product[]>([]);

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.fetchProducts().pipe(
      tap(products => this.products.set(products))
    ).subscribe();
  }

  private fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  public getProducts() {
    return this.products.asReadonly()
  }
}
