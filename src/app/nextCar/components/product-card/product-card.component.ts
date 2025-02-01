import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Producto } from '../../models/products/producto';

@Component({
  selector: 'app-product-card',
  imports: [
    MatCardModule,
    MatButtonModule

  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  
  constructor(private router: Router) { }

  @Input() product!: Producto;

  ngOnInit(): void {
    if(!this.product){
      throw new Error('Product is required');
    }
  }
  
  navigateToProduct(): void {
    this.router.navigate(['/home/product-list', this.product.id]);
  }

}
