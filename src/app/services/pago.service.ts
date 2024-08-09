import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pago } from '../Interfaces/Pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
 
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Pago/';

  constructor(private http: HttpClient) { }
  
  crearPago(pago: Pago): Observable<Pago> {
    return this.http.post<Pago>(`${this.myAppUrl}${this.myApiUrl}`, pago);
  }


  obtenerPagos(): Observable<Pago[]> {
    return this.http.get<Pago[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  eliminarPago(identificacion: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${identificacion}`);
  }

  obtenerPagoPorIdentificacion(identificacion: string): Observable<Pago> {
    return this.http.get<Pago>(`${this.myAppUrl}${this.myApiUrl}${identificacion}`);
  }

  actualizarPagoPorIdentificacion(identificacion: string, pago: Pago): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}actualizar/${identificacion}`, pago);
  }




}
