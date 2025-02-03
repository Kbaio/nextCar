import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Producto } from '../../models/products/producto';
import { ProductosTsService } from '../../services/productos.ts.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  
  filteredProducts: Producto[] = [];
  allProducts: Producto[] = [];

  constructor(private filterService: FilterService, private productosService: ProductosTsService) {}

  ngOnInit() {
    this.loadAllProducts();
    this.setupFilterListeners();
  }

  private loadAllProducts(): void {
    this.productosService.getProducts().subscribe(products => {
      this.allProducts = products;
      this.filteredProducts = products;
    });
  }

  private setupFilterListeners(): void {
    this.filterService.priceChange.subscribe(priceRange => {
      this.applyFilters();
    });

    this.filterService.categoryChange.subscribe(category => {
      this.applyFilters();
    });

    this.filterService.brandChange.subscribe(brand => {
      this.applyFilters();
    });
  }

  private applyFilters(): void {
    this.filteredProducts = this.allProducts.filter(product => {
      const matchesPrice = product.precio >= this.filterService.priceRange[0] && product.precio <= this.filterService.priceRange[1];
      const matchesCategory = this.filterService.selectedCategories.length === 0 || this.filterService.selectedCategories.includes(product.categoria);
      const matchesBrand = this.filterService.selectedBrands.length === 0 || this.filterService.selectedBrands.includes(product.marca);
      return matchesPrice && matchesCategory && matchesBrand;
    });
  }
}