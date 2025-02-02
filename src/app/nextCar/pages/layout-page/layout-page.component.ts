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
  priceRange: number[] = [0, 1000];

  maxPrice: number = 1000;
  categories: string[] = ['Electronics', 'Books', 'Clothing', 'Toys'];

  selectedCategories: string[] = [];
  brands: string[] = ['BrandA', 'BrandB', 'BrandC'];

  selectedBrands: string[] = [];


  //TODO: Implementar el filtro para brands y productos
  constructor(
    private router: Router,
    private filterService: FilterService,
    private productosService: ProductosTsService
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  //Cargar productos
  loadProducts() {
    this.productosService.getProducts().subscribe(products => {
      this.filterService.setProducts(products);
      this.extractCategoriesAndBrands(products);
    });
  }

  extractCategoriesAndBrands(products: any[]) {
    const categoriesSet = new Set<string>();
    const brandsSet = new Set<string>();

    products.forEach(product => {
      if (product.category) {
        categoriesSet.add(product.category);
      }
      if (product.brand) {
        brandsSet.add(product.brand);
      }
    });

    this.categories = Array.from(categoriesSet);
    this.brands = Array.from(brandsSet);
  }

  //Cambiar estado del sidebar
  toggleSidenav() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  //Verificar si esta en la pagina de productos
  isProductListPage(): boolean {
    return this.router.url.includes('product-list');
  }

  //Cuando se cambia el precio
  onPriceChange(priceRange: number[]) {
    this.filterService.setPriceRange(priceRange);
  }

  //Cuando se cambia la categoria
  onCategoryChange(category: string) {
    const selectedCategories = this.filterService.selectedCategoriesSource.getValue();
    const index = selectedCategories.indexOf(category);
    if (index === -1) {
      selectedCategories.push(category);
    } else {
      selectedCategories.splice(index, 1);
    }
    this.filterService.setSelectedCategories(selectedCategories);
  }

  //Cuando se cambia la marca
  onBrandChange(brand: string) {
    const selectedBrands = this.filterService.selectedBrandsSource.getValue();
    const index = selectedBrands.indexOf(brand);
    if (index === -1) {
      selectedBrands.push(brand);
    } else {
      selectedBrands.splice(index, 1);
    }
    this.filterService.setSelectedBrands(selectedBrands);
  }
}
