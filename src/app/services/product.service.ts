import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Producto } from '../Interfaces/Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Producto/';

  constructor(private http: HttpClient) { }

  getProductsByName(title: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.myAppUrl}${this.myApiUrl}search`, { params: { title } });
  }

  getProductsOnSale(isOnSale: boolean = true): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.myAppUrl}${this.myApiUrl}onSale`, { params: { isOnSale: isOnSale.toString() } });
  }

  getFeaturedProducts(isFeatured: boolean = true): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.myAppUrl}${this.myApiUrl}featured`, { params: { isFeatured: isFeatured.toString() } });
  }

  getProductsByCategory(category: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.myAppUrl}${this.myApiUrl}category/${category}`);
  }

  getProductById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addProduct(producto: Producto): Observable<number> {
    return this.http.post<number>(`${this.myAppUrl}${this.myApiUrl}`, producto);
  }

  updateProduct(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.myAppUrl}${this.myApiUrl}${producto.id}`, producto);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addToFavorites(producto: Producto): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}favorites`, producto);
  }

  removeFromFavorites(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}favorites/${id}`);
  }

  getFavoriteProducts(isFavorite: boolean = true): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.myAppUrl}${this.myApiUrl}favorites`, { params: { isFavorite: isFavorite.toString() } });
  }
  addToOnSale(id: number): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}onSale/${id}`, null);
  }

  removeFromOnSale(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}onSale/${id}`);
  }

  addToFeatured(id: number): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}featured/${id}`, null);
  }

  removeFromFeatured(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}featured/${id}`);
  }
}

