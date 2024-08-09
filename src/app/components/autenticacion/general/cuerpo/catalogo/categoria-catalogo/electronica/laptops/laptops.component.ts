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
  selector: 'app-laptops',
  standalone: true,
  imports: [CabeceraComponent, PieComponent, CommonModule, FormsModule, CabeceraCatalogoComponent],
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.css'
})
export class LaptopsComponent {
  laptops: any[] = [];
  filteredLaptops: any[] = [];
  searchTerm: string = '';
  sortOrder: 'asc' | 'desc' | '' = '';
  recentlyAddedToFavorites: Producto | null = null;
  showFavoriteMessage: boolean = false;

  constructor(private productService: ProductService,
    private router: Router) {}

  ngOnInit() {
    this.loadLaptops();
  }

  loadLaptops() {
    this.productService.getProductsByCategory('laptops').subscribe(
      (data) => {
        this.laptops = data;
        this.filteredLaptops = [...this.laptops];
      },
      (error) => {
        console.error('Error al cargar los laptops', error);
      }
    );
  }

  filterProducts() {
    this.filteredLaptops = this.laptops.filter(producto =>
      producto.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );

    if (this.sortOrder === 'asc') {
      this.filteredLaptops.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'desc') {
      this.filteredLaptops.sort((a, b) => b.price - a.price);
    }
  }

  sortByPrice(order: 'asc' | 'desc') {
    this.sortOrder = order;
    this.filterProducts();
  }

  editProduct(index: number) {
    this.laptops[index].isEditing = true;
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
