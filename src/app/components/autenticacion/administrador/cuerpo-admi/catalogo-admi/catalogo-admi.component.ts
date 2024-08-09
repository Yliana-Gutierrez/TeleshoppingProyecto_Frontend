import { Component } from '@angular/core';
import { CabeceraAdmiComponent } from "../../cabecera-admi/cabecera-admi.component";
import { PieAdmiComponent } from "../../pie-admi/pie-admi.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ProductService } from '../../../../../services/product.service';
import { CabeceraCatalogoAdmiComponent } from './cabecera-catalogo-admi/cabecera-catalogo-admi.component';
import { Producto } from '../../../../../Interfaces/Producto';
import { Router } from '@angular/router';

@Component({
    selector: 'app-catalogo-admi',
    standalone: true,
    templateUrl: './catalogo-admi.component.html',
    styleUrl: './catalogo-admi.component.css',
    imports: [CabeceraAdmiComponent, PieAdmiComponent, CommonModule, FormsModule, CabeceraCatalogoAdmiComponent]
})
export class CatalogoAdmiComponent {
    dropdownOpen: boolean = false;
  subMenuOpen: { [key: string]: boolean } = {
    electronica: false,
    moda: false,
    salud: false,
    ComputadorasyLaptops: false,
  };

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleSubMenu(menu: string): void {
    this.subMenuOpen[menu] = !this.subMenuOpen[menu];
  }

  openSubMenu(menu: string): void {
    this.subMenuOpen[menu] = true;
  }

  closeSubMenu(menu: string): void {
    this.subMenuOpen[menu] = false;
  }
  

  productsOnSale: Producto[] = [];
    featuredProducts: Producto[] = [];
    productos: Producto[] = [];
    filteredProductos: Producto[] = [];
    searchTerm: string = '';
    searchId: number | null = null;
    selectedCategory: string = '';
    
    sortOrder: 'asc' | 'desc' | '' = '';
    noResults: boolean = false;
    favoritedProducts: Producto[] = [];
    recentlyAddedToFavorites: Producto | null = null;
    recentlyAddedToOnSale: number | null = null;
    recentlyAddedToFeatured: number | null = null;
    showFavoriteMessage: boolean = false;
    showOnSaleMessage: boolean= false;
    showFeaturedMessage: boolean= false;


    constructor(private productService: ProductService,
      private router: Router) {}

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

    searchProductById() {
      if (this.searchId !== null) {
        this.productService.getProductById(this.searchId).subscribe(
          (product) => {
            if (product) {
              this.filteredProductos = [product];
              this.noResults = false;
            } else {
              this.filteredProductos = [];
              this.noResults = true;
            }
          },
          (error) => {
            console.error('Error al buscar producto por ID:', error);
            this.filteredProductos = [];
            this.noResults = true;
          }
        );
      } else {
        this.filterProducts(); // Volver a la búsqueda normal si no hay ID
      }
    }
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
      this.router.navigate(['/autenticacion/administrador/cuerpo/catalogo-admi/descripcion-admi/', producto.id]);
    }
    /* viewDescription(producto: Producto) {
      this.router.navigate(['/autenticacion/general/cuerpo/catalogo/descripcion/', producto.id]);
    } */

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

    addCard(isOnSale: boolean) {
        const newProduct: Producto = {
            id: 0,
            image: 'https://via.placeholder.com/150',
            title: 'Nuevo Producto',
            price: 0,
            isEditing: true,
            description: '',
            available: true,
            code: '',
            category: '',
            isOnSale: isOnSale,
            isFeatured: !isOnSale,
            isFavorite: false
        };

        this.productService.addProduct(newProduct).subscribe(
            id => {
                newProduct.id = id;
                if (isOnSale) {
                    this.productsOnSale.push(newProduct);
                } else {
                    this.featuredProducts.push(newProduct);
                }
            },
            error => console.error('Error al añadir producto:', error)
        );
    }

    removeCard(index: number, isOnSale: boolean) {
      const productos = isOnSale ? this.productsOnSale : this.featuredProducts;
      const productToRemove = productos[index];
      if (productToRemove && productToRemove.id) {
        this.productService.deleteProduct(productToRemove.id).subscribe(
          () => {
            productos.splice(index, 1);
          },
          error => console.error('Error al eliminar producto:', error)
        );
      } else {
        console.error('El producto no tiene un ID válido');
      }
    }

    editCard(index: number, isOnSale: boolean) {
        const productos = isOnSale ? this.productsOnSale : this.featuredProducts;
        productos[index].isEditing = true;
    }

    saveMessages: { [key: number]: string } = {};

    saveCard(index: number, isOnSale: boolean) {
      const productos = isOnSale ? this.productsOnSale : this.featuredProducts;
      const productToUpdate = productos[index];
      productToUpdate.isEditing = false;
    
      this.productService.updateProduct(productToUpdate).subscribe(
        updatedProduct => {
          productos[index] = updatedProduct;
          this.saveMessages[updatedProduct.id!] = 'Producto guardado correctamente';
          setTimeout(() => delete this.saveMessages[updatedProduct.id!], 3000); // Clear message after 3 seconds
        },
        error => {
          console.error('Error al actualizar producto:', error);
          this.saveMessages[productToUpdate.id!] = 'Error al guardar el producto';
          setTimeout(() => delete this.saveMessages[productToUpdate.id!], 3000);
        }
      );
    }


    addToOnSale(id: number) {
        this.productService.addToOnSale(id).subscribe(
            () => {
                this.recentlyAddedToOnSale = id;
                this.showOnSaleMessage = true;
                setTimeout(() => {
                    this.recentlyAddedToOnSale = null;
                    this.showFavoriteMessage = false;
                }, 2000);
                console.log('Producto añadido a productos en oferta:', id);
            },
            error => console.error('Error al añadir a productos en oferta:', error)
        );
    }
    removeFromOnSale(product: Producto) {
        if (product.id !== undefined) {
          this.productService.removeFromOnSale(product.id).subscribe(
            () => {
              this.loadProducts(); // Recargar la lista después de eliminar
            },
            error => {
              console.error('Error al eliminar de productos en oferta:', error);
            }
          );
        } else {
          console.error('El producto no tiene un ID definido');
        }
      }
    addToFatured(id: number) {
        this.productService.addToFeatured(id).subscribe(
            () => {
                this.recentlyAddedToFeatured = id;
                this.showFeaturedMessage = true;
                setTimeout(() => {
                    this.recentlyAddedToFeatured = null;
                    this.showFeaturedMessage = false;
                }, 2000);
                console.log('Producto añadido a productos destacados:', id);
            },
            error => console.error('Error al añadir a productos destacados:', error)
        );
    }
    removeFromFatured(product: Producto) {
        if (product.id !== undefined) {
          this.productService.removeFromFeatured(product.id).subscribe(
            () => {
              this.loadProducts(); // Recargar la lista después de eliminar
            },
            error => {
              console.error('Error al eliminar de productos destacados:', error);
            }
          );
        } else {
          console.error('El producto no tiene un ID definido');
        }
      }
    
}



