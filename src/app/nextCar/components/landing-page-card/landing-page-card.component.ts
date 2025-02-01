import { Component, Input } from '@angular/core';
import { Producto } from '../../models/products/producto';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-landing-page-card',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './landing-page-card.component.html',
  styleUrl: './landing-page-card.component.scss'
})
export class LandingPageCardComponent {
  @Input() product!: Producto
}

