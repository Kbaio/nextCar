import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { CreatePostPageComponent } from "../../pages/create-post-page/create-post-page.component";
import { MatCardModule } from '@angular/material/card';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filters',
  imports: [
    CheckboxModule,
    FormsModule,
    CommonModule,
    FormsModule,
    CheckboxModule,
    MatSliderModule,
    CreatePostPageComponent,
    MatCardModule
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent implements OnInit {

  priceRange: number[] = [0, 1000];
  maxPrice: number = 1000;

  categories: string[] = [];
  selectedCategories: string[] = [];

  brands: string[] = [];
  selectedBrands: string[] = [];

  @Output() priceChange = new EventEmitter<number[]>();
  @Output() categoryChange = new EventEmitter<string>();
  @Output() brandChange = new EventEmitter<string>();

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.filterService.categoriesSubject.subscribe(categories => {
      this.categories = categories;
    });

    this.filterService.brandsSubject.subscribe(brands => {
      this.brands = brands;
    });

    this.filterService.maxPriceSubject.subscribe(maxPrice => {
      this.maxPrice = maxPrice;
    });

    this.priceRange = this.filterService.priceRange;
  }

  onPriceChange(event: any) {
    this.filterService.updatePriceRange(this.priceRange);
    this.priceChange.emit(this.priceRange);
    console.log(this.priceRange);
  }

  onCategoryChange(category: string) {
    this.filterService.updateSelectedCategories(category);
    this.categoryChange.emit(category);
    console.log(category);
  }

  onBrandChange(brand: string) {
    this.filterService.updateSelectedBrands(brand);
    this.brandChange.emit(brand);
    console.log(brand);
  }
}