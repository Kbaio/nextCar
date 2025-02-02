import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/products/producto';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private productsSource = new BehaviorSubject<Producto[]>([]);
  private filteredProductsSource = new BehaviorSubject<Producto[]>([]);
  private priceRangeSource = new BehaviorSubject<number[]>([0, 1000]);
  public selectedCategoriesSource = new BehaviorSubject<string[]>([]);
  public selectedBrandsSource = new BehaviorSubject<string[]>([]);

  products$ = this.productsSource.asObservable();
  filteredProducts$ = this.filteredProductsSource.asObservable();
  priceRange$ = this.priceRangeSource.asObservable();
  selectedCategories$ = this.selectedCategoriesSource.asObservable();
  selectedBrands$ = this.selectedBrandsSource.asObservable();

  setProducts(products: Producto[]) {
    this.productsSource.next(products);
    this.applyFilters();
  }

  setPriceRange(priceRange: number[]) {
    this.priceRangeSource.next(priceRange);
    this.applyFilters();
  }

  setSelectedCategories(categories: string[]) {
    this.selectedCategoriesSource.next(categories);
    this.applyFilters();
  }

  setSelectedBrands(brands: string[]) {
    this.selectedBrandsSource.next(brands);
    this.applyFilters();
  }

  private applyFilters() {
    const products = this.productsSource.getValue();
    const priceRange = this.priceRangeSource.getValue();
    const selectedCategories = this.selectedCategoriesSource.getValue();
    const selectedBrands = this.selectedBrandsSource.getValue();

    const filteredProducts = products.filter(product => {
      const matchesPrice = product.precio >= priceRange[0] && product.precio <= priceRange[1];
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.categoria);
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.marca);
      return matchesPrice && matchesCategory && matchesBrand;
    });

    this.filteredProductsSource.next(filteredProducts);
  }
}