import { FilterService } from './../../services/filter.service';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { Producto } from '../../models/products/producto';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { LandingPageCardComponent } from '../../components/landing-page-card/landing-page-card.component';
import { ProductosTsService } from '../../services/productos.ts.service';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Component, HostListener } from '@angular/core';
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
  public categories: Set<String> = new Set(); //Un set para guardar las categorias
  public responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '1650px',
      numVisible: 3, 
      numScroll: 1
    },
    {
      breakpoint: '1200px',
      numVisible: 2, 
      numScroll: 1
    },
    {
      breakpoint: '700px',
      numVisible: 1, 
      numScroll: 1
    }
  ];
  
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
  fillCategories(): void {
    for (let prod of this.products) {
      this.categories.add(prod.categoria);
  }
}

  navigateToProductList(category?: string) {
    // Logic to navigate to the product list page with the selected category
    if (category) {
      this.router.navigate(['product-list'], { queryParams: { category } });
    } else {
      this.router.navigate(['/home/product-list']);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateNumVisible();
  }

  updateNumVisible() {
    const width = window.innerWidth;

    if (width >= 1650){
      this.numVisible = 3;
    } else if (width >= 1200) {
      this.numVisible = 2;
    } else {
      this.numVisible = 1;
    }
  }
}
