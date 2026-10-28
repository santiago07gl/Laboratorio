import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, ProductsResponse } from '../models/store.models';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private readonly http = inject(HttpClient);
private apiUrl = 'http://localhost:3000/api/products';

  getProducts(): Observable<Product[]> {
    return this.http
      .get<ProductsResponse>(this.apiUrl)
      .pipe(map((response) => response.products));
  }
}
