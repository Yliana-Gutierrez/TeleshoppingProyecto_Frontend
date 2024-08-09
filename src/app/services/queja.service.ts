import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Queja } from '../Interfaces/Queja';
@Injectable({
  providedIn: 'root'
})

export class QuejaService {
    private myAppUrl: string = environment.endpoint;
    private myApiUrl: string = 'api/Queja/';
  
    constructor(private http: HttpClient) { }
  
    // Crear una queja
    registrarQueja(queja: Queja): Observable<number> {
      return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, queja);
    }
  
    // Leer una queja por ID
    obtenerQuejaPorId(quejaId: number): Observable<Queja> {
      return this.http.get<Queja>(`${this.myAppUrl}${this.myApiUrl}${quejaId}`);
    }
  
    // Leer todas las quejas
    obtenerQuejas(): Observable<Queja[]> {
      return this.http.get<Queja[]>(`${this.myAppUrl}${this.myApiUrl}`);
    }
  
    // Actualizar una queja por ID
    actualizarQueja(quejaId: number, queja: Queja): Observable<void> {
      return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${quejaId}`, queja);
    }
  
    // Eliminar una queja por ID
    eliminarQueja(quejaId: number): Observable<void> {
      return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${quejaId}`);
    }
  
    // Filtros de búsqueda
    buscarQuejasPorEstado(estado: string): Observable<Queja[]> {
      return this.http.get<Queja[]>(`${this.myAppUrl}${this.myApiUrl}buscarPorEstado/${estado}`);
    }
  
    buscarQuejasPorFecha(fecha: Date): Observable<Queja[]> {
      return this.http.get<Queja[]>(`${this.myAppUrl}${this.myApiUrl}buscarPorFecha/${fecha}`);
    }
  
    buscarQuejasPorCliente(nombre: string): Observable<Queja[]> {
      return this.http.get<Queja[]>(`${this.myAppUrl}${this.myApiUrl}buscarPorCliente/${nombre}`);
    }
  }
