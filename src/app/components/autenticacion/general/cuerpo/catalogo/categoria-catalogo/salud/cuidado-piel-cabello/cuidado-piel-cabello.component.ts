import { Component, OnInit } from '@angular/core';
import { CabeceraComponent } from '../../../../../cabecera/cabecera.component';
import { PieComponent } from '../../../../../pie/pie.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../../../../../../services/product.service';
import { CabeceraCatalogoComponent } from '../../../cabecera-catalogo/cabecera-catalogo.component';
import { Producto } from '../../../../../../../../Interfaces/Producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuidado-piel-cabello',
  standalone: true,
  imports: [CabeceraComponent, PieComponent, CommonModule, FormsModule, CabeceraCatalogoComponent],
  templateUrl: './cuidado-piel-cabello.component.html',
  styleUrl: './cuidado-piel-cabello.component.css'
})
export class CuidadoPielCabelloComponent {
  cuidado_piel_cabello: any[] = [];
  filteredCuidado_piel_cabello: any[] = [];
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' | '' = '';
  recentlyAddedToFavorites: Producto | null = null;
  showFavoriteMessage: boolean = false;

  constructor(private productService: ProductService,
    private router: Router) {}

  ngOnInit() {
    this.loadCuidado_piel_cabello();
  }

  loadCuidado_piel_cabello() {
    this.productService.getProductsByCategory('cuidado_piel_cabello').subscribe(
      (data) => {
        this.cuidado_piel_cabello = data;
        this.filteredCuidado_piel_cabello = [...this.cuidado_piel_cabello];
      },
      (error) => {
        console.error('Error al cargar los celulares', error);
      }
    );
  }

  filterProducts() {
    this.filteredCuidado_piel_cabello = this.cuidado_piel_cabello.filter(producto =>
      producto.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (this.sortOrder === 'asc') {
      this.filteredCuidado_piel_cabello.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'desc') {
      this.filteredCuidado_piel_cabello.sort((a, b) => b.price - a.price);
    }
  }

  sortByPrice(order: 'asc' | 'desc') {
    this.sortOrder = order;
    this.filterProducts();
  }

  editProduct(index: number) {
    this.cuidado_piel_cabello[index].isEditing = true;
  }
  
  addToCart(producto: Producto) {
    console.log('Producto añadido al carrito:', producto);
  }

  viewDescription(producto: Producto) {
    this.router.navigate(['/autenticacion/general/cuerpo/catalogo/descripcion/', producto.id]);
  }

  addToFavorites(producto: Producto) {
    this.productService.addToFavorites(producto).subscribe(
      () => {
        this.recentlyAddedToFavorites = producto;
        this.showFavoriteMessage = true;
        setTimeout(() => {
          this.recentlyAddedToFavorites = null;
          this.showFavoriteMessage = false;
        }, 2000);
        console.log('Producto añadido a favoritos:', producto);
      },
      (error) => {
        console.error('Error al añadir a favoritos', error);
      }
    );
  }
}
