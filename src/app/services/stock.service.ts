import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { Stock} from '../Interfaces/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Stock/';
  
  constructor(private http: HttpClient) { }

  obtenerStocks(): Observable<Stock[]> {
    return this.http.get<Stock[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  obtenerStock(id: number): Observable<Stock>{
    return this.http.get<Stock>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  crearStock(stock:Stock): Observable<number>{
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`,stock);
  }
  
  modificarStock(stock: Stock): Observable<number>{
    return this.http.put<number>(`${this.myAppUrl}${this.myApiUrl}${stock.id}`,stock);
  }

  eliminarStock(id: number): Observable<void>{
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }


}