import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Entrega } from '../Interfaces/Entrega';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Entrega/';

  constructor(private http: HttpClient) { }

  getEntregas(): Observable<Entrega[]>{
    return this.http.get<Entrega[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getEntrega(id: number): Observable<Entrega>{
    return this.http.get<Entrega>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }
  
  addEntrega(entrega:Entrega): Observable<number>{
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`,entrega);
  }

  modificarEntrega(entrega: Entrega): Observable<number>{
    return this.http.put<number>(`${this.myAppUrl}${this.myApiUrl}${entrega.id}`,entrega);
  }

  meliminarEntrega(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  getEntregasPorUsuario(userId: number): Observable<Entrega[]> {
    return this.http.get<Entrega[]>(`${this.myApiUrl}/usuario/${userId}`);
  }

}
