import { Component } from '@angular/core';
import { ProductCardComponent } from "../../components/product-card/product-card.component";
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  imports: [MatIconModule, CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  product = {
    model: 'Ejemplo Modelo',
    description: 'Descripción del producto...',
    year: 2024,
    price: '₡ XX,XXX',
    brand: 'Ejemplo Marca',
    rating: 0,
    seller: 'XXXX XXX'
  };

  userRating: number = 0; 
  
  rate(star: number): void {
      this.userRating = star; 
  }

  showComments: boolean = false;
  comments: string[] = ["Buen producto", "Me interesa", "Este vendedor tiene excelentes productos."];

  toggleComments() {
    this.showComments = !this.showComments;
  }
}