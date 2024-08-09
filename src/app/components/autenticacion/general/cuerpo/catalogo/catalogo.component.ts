import { Component, OnInit } from '@angular/core';
import { CabeceraComponent } from "../../cabecera/cabecera.component";
import { PieComponent } from "../../pie/pie.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../../../services/product.service';
import { CabeceraCatalogoComponent } from './cabecera-catalogo/cabecera-catalogo.component';
import { Producto } from '../../../../../Interfaces/Producto';
import { Router } from '@angular/router';



@Component({
    selector: 'app-catalogo',
    standalone: true,
    templateUrl: './catalogo.component.html',
    styleUrl: './catalogo.component.css',
    imports: [CabeceraComponent, PieComponent, CommonModule, FormsModule, CabeceraCatalogoComponent]
})
export class CatalogoComponent{

  /* -------------------------------------------- */
  productsOnSale: Producto[] = [];
    featuredProducts: Producto[] = [];
    productos: Producto[] = [];
    filteredProductos: Producto[] = [];
    searchTerm: string = '';
    sortOrder: 'asc' | 'desc' | '' = '';
    noResults: boolean = false;
    favoritedProducts: Producto[] = [];
    recentlyAddedToFavorites: Producto | null = null;
    showFavoriteMessage: boolean = false;

    constructor(private productService: ProductService,
      private router: Router
    ) {}

    ngOnInit() {
        this.loadProducts();
    }

    loadProducts() {
        this.productService.getProductsOnSale().subscribe(
            productos => this.productsOnSale = productos
        );
        this.productService.getFeaturedProducts().subscribe(
            productos => this.featuredProducts = productos
        );
        this.productService.getProductsByCategory('all').subscribe(
            productos => {
                this.productos = productos;
                this.filteredProductos = [...this.productos];
            }
        );
        this.productService.getProductsByName('').subscribe(
          (data) => {
            this.productos = data;
            this.filterProducts();
          },
          (error) => {
            console.error('Error al cargar productos:', error);
          }
        );
    }

    filterProducts() {
      if (this.searchTerm.trim() === '') {
        this.filteredProductos = [...this.productos];
        this.noResults = false;
      } else {
        this.productService.getProductsByName(this.searchTerm).subscribe(
          (data) => {
            this.filteredProductos = data;
            this.noResults = this.filteredProductos.length === 0;
            this.applySorting();
          },
          (error) => {
            console.error('Error al buscar productos:', error);
          }
        );
      }
    }
  
    applySorting() {
      if (this.sortOrder === 'asc') {
        this.filteredProductos.sort((a, b) => a.price - b.price);
      } else if (this.sortOrder === 'desc') {
        this.filteredProductos.sort((a, b) => b.price - a.price);
      }
    }
  
    sortByPrice(order: 'asc' | 'desc') {
      this.sortOrder = order;
      this.applySorting();
    }

    selectedCategory: string = '';
    
    filterByCategory() {
      if (this.selectedCategory) {
        this.productService.getProductsByCategory(this.selectedCategory).subscribe(
          (products) => {
            this.filteredProductos = products;
            this.noResults = this.filteredProductos.length === 0;
            this.applySorting();
          },
          (error) => {
            console.error('Error al filtrar por categoría:', error);
            this.filteredProductos = [];
            this.noResults = true;
          }
        );
      } else {
        this.loadProducts(); // Cargar todos los productos si no hay categoría seleccionada
      }
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
            error => console.error('Error al añadir a favoritos:', error)
        );
    }
}



