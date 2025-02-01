import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from '../../../../environment.ts/environment';
import { Comentario } from '../models/products/comentario';

@Injectable({
  providedIn: 'root'
})

export class ComentarioTsService {
  private baseUrl = environments.baseUrl;
  constructor(private http: HttpClient) { }

  getComments(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(`${this.baseUrl}/comentarios`);
  }
}