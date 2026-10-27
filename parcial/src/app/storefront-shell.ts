import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="app-shell">
      <header class="site-header">
        <a class="brand" routerLink="/" aria-label="La Cosecha, inicio">
          <span class="brand-mark" aria-hidden="true">LC</span>
          <span>
            <span class="brand-name">La Cosecha</span>
            <span class="brand-caption">mercado de barrio</span>
          </span>
        </a>
        <nav class="main-nav" aria-label="Navegación principal">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Tienda</a>
          <a routerLink="/inventario" routerLinkActive="active">Inventario</a>
        </nav>
        <span class="header-note"><span class="status-dot"></span> Fresco todos los días</span>
      </header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <footer class="site-footer">
        <span>La Cosecha <span aria-hidden="true">·</span> mercado local</span>
        <span>Buenos alimentos, buenos días.</span>
      </footer>
    </div>
  `
})
export class StorefrontShell {}
