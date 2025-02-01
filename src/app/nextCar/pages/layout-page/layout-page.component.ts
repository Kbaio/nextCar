import { routes } from './../../../app.routes';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from "../../../shared/components/nav-bar/nav-bar.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-layout-page',
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    NavBarComponent,
    MatSidenavModule,
    RouterModule,
    MatListModule
],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss'
})
export class LayoutPageComponent {
  
  isSidebarOpen: boolean = true; // Estado del sidebar

  constructor(private router: Router) { }

  toggleSidenav() {
    this.isSidebarOpen = !this.isSidebarOpen; // Cambiar estado del sidebar
  }

  isProductListPage(): boolean {
    return this.router.url.includes('product-list');
  }

}
