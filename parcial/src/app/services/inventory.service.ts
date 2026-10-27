import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, ProductsResponse } from '../models/store.models';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://dummyjson.com/products/category/groceries?limit=30';

  getInventory(): Observable<Product[]> {
    return this.http
      .get<ProductsResponse>(this.apiUrl)
      .pipe(map((response) => response.products));
  }
}
