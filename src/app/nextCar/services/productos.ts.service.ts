import { Injectable } from '@angular/core';
import { Producto } from '../models/products/producto';
import { environments } from '../../../../environment.ts/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosTsService {
  private baseUrl = environments.baseUrl;
  constructor( private http:HttpClient ) { }

  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.baseUrl}/productos`);
  }

  getProductById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseUrl}/productos/${id}`);
  }
  
}
