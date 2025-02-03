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
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  public numVisible: number = 3;
  public products: Producto[] = [];
  public categories: Set<String> = new Set(); //Un set para guardar las categorias
  
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
  fillCategories() {
    for (let prod of this.products) {
      this.categories.add(prod.categoria);
    }
  }




}
