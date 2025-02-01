import { Injectable } from '@angular/core';
import { Publicacion } from '../models/products/publicacion';
import { environments } from '../../../../environment.ts/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionTsService {
  private baseUrl = environments.baseUrl;
  constructor(private http: HttpClient) { }

  getPublicaciones(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(`${this.baseUrl}/publicaciones`);
  }
}
