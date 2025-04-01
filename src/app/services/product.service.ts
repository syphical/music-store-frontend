import {Injectable, signal} from '@angular/core';
import {Product} from '../models/Product';
import {HttpClient} from '@angular/common/http';
import {catchError, Observable, of, tap} from 'rxjs';
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

  public fetchProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching products:', error);
        return of([]);
      })
    );
  }

  public getProducts() {
    return this.products.asReadonly()
  }

  public getProductById(id: string) {
    return this.http.get<Product>(this.apiUrl + "/" + id);
  }

  public getProductsByCategory(categoryName: string) {
    const allProducts = this.products();
    if (!categoryName || categoryName.toLowerCase() === "all products") {
      return this.products.asReadonly();
    }

    return signal(allProducts.filter(product =>
    product.category.name.toLowerCase() === categoryName.toLowerCase()
    )).asReadonly();
  }

  public getFeaturedProducts(count: number = 6) {
    const allProducts = this.products();
    return signal(allProducts.slice(0, count)).asReadonly();
  }
}
