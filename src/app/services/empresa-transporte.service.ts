import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Empresatransporte } from '../Interfaces/EmpresaTransporte';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaTransporteService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/EmpresaTransporte/';


  constructor(private http: HttpClient) { }

  getEmpresasTransporte(): Observable<Empresatransporte[]>{
    return this.http.get<Empresatransporte[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  addEmpresatransporte(entrega:Empresatransporte): Observable<number>{
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`,entrega);
  }

}
