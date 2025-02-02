// filepath: /c:/Users/David/OneDrive - Estudiantes ITCR/TEC/Verano - 2024/Requerimientos/nextCar/src/app/nextCar/pages/product-list-page/product-list-page.component.ts
import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { Producto } from '../../models/products/producto';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {
  filteredProducts: Producto[] = [];

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.filterService.filteredProducts$.subscribe((products) => {
      this.filteredProducts = products;
    });
  }
}