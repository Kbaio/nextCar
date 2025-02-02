import { SliderModule } from 'primeng/slider';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  imports: [
            CheckboxModule, 
            SliderModule,
            FormsModule,
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  @Input() priceRange: number[] = [0, 1000];
  @Input() maxPrice: number = 1000;
  @Input() categories: string[] = [];
  @Input() selectedCategories: string[] = [];
  @Input() brands: string[] = [];
  @Input() selectedBrands: string[] = [];

  @Output() priceChange = new EventEmitter<number[]>();
  @Output() categoryChange = new EventEmitter<string>();
  @Output() brandChange = new EventEmitter<string>();
  
  onPriceChange(event: any) {
    this.priceChange.emit(this.priceRange);
  }

  onCategoryChange(category: string) {
    this.categoryChange.emit(category);
  }

  onBrandChange(brand: string) {
    this.brandChange.emit(brand);
  }
}
