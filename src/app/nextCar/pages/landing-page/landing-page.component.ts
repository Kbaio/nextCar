import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { Producto } from '../../models/products/producto';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

import { LandingPageCardComponent } from '../../components/landing-page-card/landing-page-card.component';
import { ProductosTsService } from '../../services/productos.ts.service';

@Component({
  selector: 'app-landing-page',
  imports: [
    MatDividerModule,
    CarouselModule,
    ButtonModule,
    MatButtonModule,
    LandingPageCardComponent,
    CommonModule
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  public numVisible: number = 3;
  public products: Producto[] = [];

  constructor(private servicioProducto: ProductosTsService ) { }

  ngOnInit(): void {
    this.servicioProducto.getProducts().subscribe( products => {
      this.products = products;
      console.log(this.products);
    });
  }
}
