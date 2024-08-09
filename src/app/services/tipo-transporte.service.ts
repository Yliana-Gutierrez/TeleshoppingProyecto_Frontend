import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { TipoTransporte } from '../Interfaces/TipoTransporte';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoTransporteService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/TipoTransporte/';

  constructor(private http: HttpClient) { }

  getTiposTransporte(): Observable<TipoTransporte[]>{
    return this.http.get<TipoTransporte[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
