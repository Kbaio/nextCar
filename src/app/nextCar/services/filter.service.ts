import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Producto } from '../models/products/producto';
import { ProductosTsService } from './productos.ts.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public priceRange: number[] = [0, 1000];
  public maxPrice: number = 1000;

  public categories: string[] = [];
  public selectedCategories: string[] = [];

  public brands: string[] = [];
  public selectedBrands: string[] = [];

  public priceChange: Subject<number[]> = new Subject<number[]>();
  public categoryChange: Subject<string[]> = new Subject<string[]>();
  public brandChange: Subject<string[]> = new Subject<string[]>();

  public categoriesSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public brandsSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  public maxPriceSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1000);

  constructor(private productosService: ProductosTsService) {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.productosService.getProducts().subscribe(products => {
      this.fillCategoriesAndBrands(products);
    });
  }

  private fillCategoriesAndBrands(products: Producto[]): void {
    const categoriesSet = new Set<string>();
    const brandsSet = new Set<string>();
    let maxProductPrice = 0;

    products.forEach(product => {
      categoriesSet.add(product.categoria);
      brandsSet.add(product.marca);
      if (product.precio > maxProductPrice) {
        maxProductPrice = product.precio;
      }
    });

    this.categories = Array.from(categoriesSet);
    this.brands = Array.from(brandsSet);
    this.maxPrice = maxProductPrice + 1000;

    this.categoriesSubject.next(this.categories);
    this.brandsSubject.next(this.brands);
    this.maxPriceSubject.next(this.maxPrice);
  }

  public updatePriceRange(priceRange: number[]): void {
    this.priceRange = priceRange;
    this.priceChange.next(priceRange);
  }

  public updateSelectedCategories(category: string): void {
    const index = this.selectedCategories.indexOf(category);
    if (index === -1) {
      this.selectedCategories.push(category);
    } else {
      this.selectedCategories.splice(index, 1);
    }
    this.categoryChange.next(this.selectedCategories);
  }

  public updateSelectedBrands(brand: string): void {
    const index = this.selectedBrands.indexOf(brand);
    if (index === -1) {
      this.selectedBrands.push(brand);
    } else {
      this.selectedBrands.splice(index, 1);
    }
    this.brandChange.next(this.selectedBrands);
  }
}