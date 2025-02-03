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
  
  constructor(
              private servicioProducto: ProductosTsService,
              private filterService: FilterService
            ) { }

  ngOnInit(): void {
    this.servicioProducto.getProducts().subscribe( products => {
      this.products = products;
      this.fillCategories(); //Aqui llamo a la funcion para llenar el set de categorias
      console.log(this.products);
    });
  }

  //Funcion para llenar el set de categorias
  fillCategories(): void {
    for (let prod of this.products) {
      this.categories.add(prod.categoria);
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
