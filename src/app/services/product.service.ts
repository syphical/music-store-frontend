import {Injectable, signal} from '@angular/core';
import {Product} from '../models/Product';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, tap} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl + "/products";
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

  public getProductById(id: string) {
    return this.http.get<Product>(this.apiUrl + "/" + id);
  }
}
