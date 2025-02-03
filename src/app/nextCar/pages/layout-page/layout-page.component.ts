import { FilterService } from './../../services/filter.service';
import { ProductosTsService } from './../../services/productos.ts.service';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavBarComponent } from "../../../shared/components/nav-bar/nav-bar.component";
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FiltersComponent } from "../../components/filters/filters.component";
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-layout-page',
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    NavBarComponent,
    MatSidenavModule,
    RouterModule,
    MatListModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FiltersComponent,
    CheckboxModule
    
],
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.scss'
})

export class LayoutPageComponent {

  isSidebarOpen: boolean = false;

  //TODO: Implementar el filtro para brands y productos
  constructor(
    private router: Router,
  ) {}

  //Cambiar estado del sidebar
  toggleSidenav() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  //Verificar si esta en la pagina de productos
  isProductListPage(): boolean {
    return this.router.url.includes('product-list');
  }

}
