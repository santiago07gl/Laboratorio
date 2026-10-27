import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/store.models';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-inventory-page',
  imports: [CurrencyPipe],
  templateUrl: './inventory.html'
})
export class InventoryPage implements OnInit {
  private readonly inventoryService = inject(InventoryService);

  products: Product[] = [];
  isLoading = true;
  errorMessage = '';

  get totalStock(): number {
    return this.products.reduce((total, product) => total + product.stock, 0);
  }

  get averagePrice(): number {
    if (this.products.length === 0) {
      return 0;
    }

    return this.products.reduce((total, product) => total + product.price, 0) / this.products.length;
  }

  ngOnInit(): void {
    this.loadInventory();
  }

  loadInventory(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.inventoryService.getInventory().subscribe({
      next: (products) => {
        this.products = products;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'No pudimos cargar el inventario de muestra. Inténtalo de nuevo.';
        this.isLoading = false;
      }
    });
  }
}
