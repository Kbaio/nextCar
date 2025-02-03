import { FilterService } from './../../services/filter.service';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Producto } from '../../models/products/producto';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { LandingPageCardComponent } from '../../components/landing-page-card/landing-page-card.component';
import { ProductosTsService } from '../../services/productos.ts.service';
import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [
    MatDividerModule,
    CarouselModule,
    ButtonModule,
    MatButtonModule,
    LandingPageCardComponent,
    CommonModule,
    MatCardModule, 
    MatChipsModule
    
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  public numVisible: number = 3;
  public products: Producto[] = [];
  public categories: string[] = []; //Un set para guardar las categorias
  
  constructor(private servicioProducto: ProductosTsService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.servicioProducto.getProducts().subscribe( products => {
      this.products = products;
      console.log(this.products);
      this.fillCategories(); // Llama a la función para llenar las categorías
    });
  }

  //Funcion para llenar el set de categorias
  fillCategories() {
    const categorySet = new Set(this.products.map(({ categoria }) => categoria));
    this.categories = Array.from(categorySet);
  }

  navigateToProductList(category?: string) {
    // Logic to navigate to the product list page with the selected category
    if (category) {
      this.router.navigate(['product-list'], { queryParams: { category } });
    } else {
      this.router.navigate(['/home/product-list']);
    }
  }
}