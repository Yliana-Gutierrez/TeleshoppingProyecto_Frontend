import { Component } from '@angular/core';
import { CabeceraComponent } from '../../../cabecera/cabecera.component';
import { PieComponent } from '../../../pie/pie.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CabeceraCatalogoComponent } from '../cabecera-catalogo/cabecera-catalogo.component';
import { ProductService } from '../../../../../../services/product.service';
import { Product } from '../../../../../../models/Product';
import { Producto } from '../../../../../../Interfaces/Producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-favoritos',
  standalone: true,
  imports: [CabeceraComponent, PieComponent, CommonModule, FormsModule, CabeceraCatalogoComponent],
  templateUrl: './productos-favoritos.component.html',
  styleUrl: './productos-favoritos.component.css'
})
export class ProductosFavoritosComponent {
  favoriteProducts: Producto[] = [];
  
  constructor(private productService: ProductService,
    private router: Router) {}

  ngOnInit() {
    this.loadFavoriteProducts();
  }

  loadFavoriteProducts() {
    this.productService.getFavoriteProducts().subscribe(
      productos => {
        this.favoriteProducts = productos;
      },
      error => {
        console.error('Error al cargar los productos favoritos:', error);
      }
    );
  }

  removeFromFavorites(producto: Producto) {
    if (producto.id !== undefined) {
      this.productService.removeFromFavorites(producto.id).subscribe(
        () => {
          this.loadFavoriteProducts(); // Recargar la lista después de eliminar
        },
        error => {
          console.error('Error al eliminar de favoritos:', error);
        }
      );
    } else {
      console.error('El producto no tiene un ID definido');
    }
  }

  addToCart(producto: Producto) {
    console.log('Producto añadido al carrito:', producto);
  }

  viewDescription(producto: Producto) {
    this.router.navigate(['/autenticacion/general/cuerpo/catalogo/descripcion/', producto.id]);
  }
}
