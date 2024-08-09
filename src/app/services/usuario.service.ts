import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../Interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Usuario/';
  
  constructor(private http: HttpClient) { }

   // Crear un nuevo registro
   crearRegistro(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.myAppUrl}${this.myApiUrl}`, usuario);
  }

   // Verificar si la cédula ya existe
   verificarCedula(cedula: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.myAppUrl}${this.myApiUrl}verificar/${cedula}`);
  }

   // Obtener usuario por ID
   obtenerUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

// Recuperar contraseña por cédula
recuperarContrasenaPorCedula(cedula: string): Observable<{ contrasena: string }> {
  return this.http.get<{ contrasena: string }>(`${this.myAppUrl}${this.myApiUrl}recuperar/${cedula}`);
}

  // Eliminar usuario por cédula
  eliminarUsuarioPorCedula(cedula: string): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}eliminar/${cedula}`);
  }

   // Obtener todos los usuarios
   obtenerTodosUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  // Verificar credenciales de usuario
  verificarCredencialesUsuario(usuario: Usuario): Observable<Usuario | null> {
    return this.http.post<Usuario | null>(`${this.myAppUrl}${this.myApiUrl}verificar-credenciales-usuario`, usuario);
  }

  // Obtener datos básicos del usuario por cédula
   obtenerDatosBasicosPorCedula(cedula: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.myAppUrl}${this.myApiUrl}datos-basicos/${cedula}`);
   }

   // Servicio para actualizar el usuario por cédula
   actualizarUsuarioPorCedula(cedula: string, usuario: Usuario): Observable<void> {
     return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}actualizar/${cedula}`, usuario);
   }

    // Servicio para actualizar el usuario por contraseña
    actualizarUsuarioPorContraseña(password: string, usuario: Usuario): Observable<void> {
     return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}actualizarContraseña/${password}`, usuario);
    }


}
