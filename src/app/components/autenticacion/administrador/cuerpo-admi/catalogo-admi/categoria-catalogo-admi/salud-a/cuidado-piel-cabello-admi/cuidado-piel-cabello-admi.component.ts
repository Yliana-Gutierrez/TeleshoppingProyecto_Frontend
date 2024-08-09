import { Component } from '@angular/core';
import { CabeceraAdmiComponent } from '../../../../../cabecera-admi/cabecera-admi.component';
import { PieAdmiComponent } from '../../../../../pie-admi/pie-admi.component';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../../../../../services/product.service';
import { CabeceraCatalogoAdmiComponent } from '../../../cabecera-catalogo-admi/cabecera-catalogo-admi.component';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../../../../../../../Interfaces/Producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuidado-piel-cabello-admi',
  standalone: true,
  imports: [CabeceraAdmiComponent, PieAdmiComponent,FormsModule, CommonModule, CabeceraCatalogoAdmiComponent],
  templateUrl: './cuidado-piel-cabello-admi.component.html',
  styleUrl: './cuidado-piel-cabello-admi.component.css'
})
export class CuidadoPielCabelloAdmiComponent {
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
    this.router.navigate(['/autenticacion/administrador/cuerpo/catalogo-admi/descripcion-admi/', producto.id]);
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

  addCard() {
    const newProduct: Producto = {
      id: 0,
      image: 'https://via.placeholder.com/150',
      title: 'Nuevo Producto',
      price: 0,
      isEditing: true,
      description: '',
      available: true,
      code: '',
      category: 'cuidado_piel_cabello',
      isOnSale: false,
      isFeatured: false,
      isFavorite: false
    };

    this.productService.addProduct(newProduct).subscribe(
      (id) => {
        newProduct.id = id;
        this.cuidado_piel_cabello.push(newProduct);
        this.filteredCuidado_piel_cabello = [...this.cuidado_piel_cabello];
      },
      (error) => {
        console.error('Error al agregar nuevo producto', error);
      }
    );
  }

  removeCard(index: number) {
    const producto = this.cuidado_piel_cabello[index];
    if (producto.id !== undefined) {
      this.productService.deleteProduct(producto.id).subscribe(
        () => {
          this.cuidado_piel_cabello.splice(index, 1);
          this.filteredCuidado_piel_cabello = [...this.cuidado_piel_cabello];
        },
        (error) => {
          console.error('Error al eliminar producto', error);
        }
      );
    } else {
      console.error('El producto no tiene un ID definido');
      // Aquí puedes agregar lógica adicional para manejar el caso de un producto sin ID
    }
  }

  editCard(index: number) {
    this.cuidado_piel_cabello[index].isEditing = true;
  }

  saveMessages: { [key: number]: string } = {};
  saveCard(index: number) {
    const producto = this.cuidado_piel_cabello[index];
    this.productService.updateProduct(producto).subscribe(
      (updatedProduct) => {
        this.cuidado_piel_cabello[index] = updatedProduct;
        this.cuidado_piel_cabello[index].isEditing = false;
        this.filteredCuidado_piel_cabello = [...this.cuidado_piel_cabello];
        this.saveMessages[updatedProduct.id!] = 'Producto guardado correctamente';
          setTimeout(() => delete this.saveMessages[updatedProduct.id!], 3000);
      },
      (error) => {
        console.error('Error al actualizar el producto', error);
      }
    );
  }

  onFileSelected(event: any, index: number) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.cuidado_piel_cabello[index].image = e.target.result;
        this.filteredCuidado_piel_cabello = [...this.cuidado_piel_cabello];
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  recentlyAddedToOnSale: number | null = null;
  recentlyAddedToFeatured: number | null = null;
  showOnSaleMessage: boolean= false;
  showFeaturedMessage: boolean= false;
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
}
