import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Proveedor } from '../Interfaces/Proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Proveedor/';
  
  constructor(private http: HttpClient) { }

  obtenerProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  obtenerProveedor(id: number): Observable<Proveedor>{
    return this.http.get<Proveedor>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  crearProveedor(proveedor:Proveedor): Observable<number>{
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`,proveedor);
  }
  
  modificarProveedor(proveedor: Proveedor): Observable<number>{
    return this.http.put<number>(`${this.myAppUrl}${this.myApiUrl}${proveedor.id}`,proveedor);
  }

  eliminarProveedor(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }


}

