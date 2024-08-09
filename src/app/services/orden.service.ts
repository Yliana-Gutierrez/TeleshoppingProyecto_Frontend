import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orden } from '../Interfaces/Orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Orden/';

  constructor(private http: HttpClient) { }
  
    
  crearOrden(orden: Orden): Observable<Orden> {
    return this.http.post<Orden>(`${this.myAppUrl}${this.myApiUrl}`, orden);
  }

  obtenerOrdenes(): Observable<Orden[]> {
    return this.http.get<Orden[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  eliminarCompra(nombre: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}eliminar/${nombre}`);
  }

  actualizarOrden(orden: Orden): Observable<Orden> {
    return this.http.put<Orden>(`${this.myAppUrl}${this.myApiUrl}${orden.id}`, orden);
  }

 
 
 
}
