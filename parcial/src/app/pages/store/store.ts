import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/store.models';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './store.html',
})
export class StorePage implements OnInit { 
  private readonly productsService = inject(ProductsService);

  products: Product[] = [];
  searchTerm: string = '';
  isLoading: boolean = true;
  errorMessage: string = '';

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.productsService.getProducts().subscribe({
      next: (data: any) => {
        this.products = Array.isArray(data) ? data : (data?.products || []);
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Error al cargar los productos desde la base de datos.';
        this.isLoading = false;
      }
    });
  }

  get filteredProducts(): Product[] {
    if (!Array.isArray(this.products)) {
      return [];
    }
    const term = this.searchTerm?.toLowerCase().trim();
    if (!term) {
      return this.products;
    }
    return this.products.filter(product =>
      product.title?.toLowerCase().includes(term)
    );
  }

  formatCategory(category: string): string {
    return category === 'groceries' ? 'Despensa' : category;
  }
}