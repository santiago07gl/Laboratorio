import { Routes } from '@angular/router';
import { InventoryPage } from './pages/inventory/inventory';
import { StorePage } from './pages/store/store';

export const routes: Routes = [
  { path: '', component: StorePage, title: 'Tienda | La Cosecha' },
  { path: 'inventario', component: InventoryPage, title: 'Inventario | La Cosecha' },
  { path: '**', redirectTo: '' }
];
