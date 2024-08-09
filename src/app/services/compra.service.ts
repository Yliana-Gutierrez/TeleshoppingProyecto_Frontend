import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from '../Interfaces/Compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Compra/';

  constructor(private http: HttpClient) { }

  agregarCompra(compra: Compra): Observable<number> {
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, compra);
  }

  eliminarCompra(nombre: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}eliminar/${nombre}`);
  }

  obtenerCompra(): Observable<Compra[]> {
    return this.http.get<Compra[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

}
