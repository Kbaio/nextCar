import { ProductosTsService } from './../../services/productos.ts.service';
import { Component } from '@angular/core';
import { Producto } from '../../models/products/producto';

@Component({
  selector: 'app-product-list-page',
  imports: [],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.scss'
})
export class ProductListPageComponent {
  products: Producto[] = [];
  filteredProducts: Producto[] = [];
  priceRange: number[] = [0, 1000];
  categories: string[] = [];
  selectedCategories: string[] = [];
  maxPrice: number = 0;
  brands: string[] = [];
  selectedBrands: string[] = [];

  constructor (private productosService: ProductosTsService) { }


  

}
