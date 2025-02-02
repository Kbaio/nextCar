import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { Producto } from '../../models/products/producto';
import { PublicacionTsService } from '../../services/publicacion.ts.service';
import { Publicacion } from '../../models/products/publicacion';

@Component({
  selector: 'app-profile-page',
  imports: [MatCardModule, MatListModule, MatDividerModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
public value: any;
public myproducts: Publicacion[] = [];
public items: Number = 5;

constructor(private serviciopublicaciones: PublicacionTsService ) {}

ngOnInit(): void {
  this.serviciopublicaciones.getPublicaciones().subscribe( publicacion => {
    this.myproducts = publicacion;
  })
}
}
