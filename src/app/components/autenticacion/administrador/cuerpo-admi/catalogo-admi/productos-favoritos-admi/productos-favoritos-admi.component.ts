import { Component } from '@angular/core';
import { CabeceraAdmiComponent } from '../../../cabecera-admi/cabecera-admi.component';
import { PieAdmiComponent } from '../../../pie-admi/pie-admi.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CabeceraCatalogoAdmiComponent } from '../cabecera-catalogo-admi/cabecera-catalogo-admi.component';
import { ProductService } from '../../../../../../services/product.service';
import { Producto } from '../../../../../../Interfaces/Producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos-favoritos-admi',
  standalone: true,
  imports: [CabeceraAdmiComponent, PieAdmiComponent, CommonModule, FormsModule, CabeceraCatalogoAdmiComponent],
  templateUrl: './productos-favoritos-admi.component.html',
  styleUrl: './productos-favoritos-admi.component.css'
})
export class ProductosFavoritosAdmiComponent {
  favoriteProducts: Producto[] = [];
  
  constructor(private productService: ProductService,
    private router: Router) {}

  ngOnInit() {
    this.loadFavoriteProducts();
  }

  loadFavoriteProducts() {
    this.productService.getFavoriteProducts().subscribe(
      products => {
        this.favoriteProducts = products;
      },
      error => {
        console.error('Error al cargar los productos favoritos:', error);
      }
    );
  }

  removeFromFavorites(product: Producto) {
    if (product.id !== undefined) {
      this.productService.removeFromFavorites(product.id).subscribe(
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
    this.router.navigate(['/autenticacion/administrador/cuerpo/catalogo-admi/descripcion-admi/', producto.id]);
  }
}