// filepath: /c:/Users/David/OneDrive - Estudiantes ITCR/TEC/Verano - 2024/Requerimientos/nextCar/src/app/nextCar/pages/product-list-page/product-list-page.component.ts
import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Producto } from '../../models/products/producto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-product-list-page',
  imports: [
            CommonModule,
            FormsModule,
            CheckboxModule,
            FormsModule,
            CardModule,
            MatSliderModule

  ],
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})

export class ProductListPageComponent implements OnInit {
  filteredProducts: Producto[] = [];
  priceRange: number[] = [0, 1000];
  maxPrice: number = 1000;
  categories: string[] = [];
  selectedCategories: string[] = [];
  brands: string[] = [];
  selectedBrands: string[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filterService.filteredProducts$.subscribe((products) => {
      this.filteredProducts = products;
    });
  }
}