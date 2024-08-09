import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Rol } from '../Interfaces/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Rol/';

  constructor(private http: HttpClient) { }

  registrarRol(rol: Rol): Observable<number> {
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, rol);
  }

  verificarUsuario(usuario: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.myAppUrl}${this.myApiUrl}verificarUsuario/${usuario}`);
  }
  
  eliminarRol(usuario: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}eliminar/${usuario}`);
  }

  obtenerRoles(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  // Verificar credenciales de rol (cambiado para aceptar objeto Rol)
  verificarCredencialesRol(rol: Rol): Observable<Rol | null> {
    return this.http.post<Rol | null>(`${this.myAppUrl}${this.myApiUrl}verificar-credenciales-rol`, rol);
  }

   // Servicio para actualizar el rol por contraseña
   actualizarRolPorContraseña(password: string, rol: Rol): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}actualizarContraseña/${password}`, rol);
   }
 
}

