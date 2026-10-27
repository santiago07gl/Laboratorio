import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/store.models';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-store-page',
  imports: [CurrencyPipe, DecimalPipe, FormsModule],
  templateUrl: './store.html'
})
export class StorePage implements OnInit {
  private readonly productsService = inject(ProductsService);

  products: Product[] = [];
  searchTerm = '';
  isLoading = true;
  errorMessage = '';

  get filteredProducts(): Product[] {
    const term = this.searchTerm.trim().toLocaleLowerCase();
    return this.products.filter((product) =>
      `${product.title} ${product.description} ${product.category}`.toLocaleLowerCase().includes(term)
    );
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'No pudimos cargar los productos. Revisa tu conexión e inténtalo de nuevo.';
        this.isLoading = false;
      }
    });
  }

  formatCategory(category: string): string {
    return category === 'groceries' ? 'Despensa' : category;
  }
}
