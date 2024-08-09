import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CabeceraAdmiComponent } from '../../../cabecera-admi/cabecera-admi.component';
import { PieAdmiComponent } from '../../../pie-admi/pie-admi.component';
import { CabeceraCatalogoAdmiComponent } from '../cabecera-catalogo-admi/cabecera-catalogo-admi.component';
import { ProductService } from '../../../../../../services/product.service';
import { Producto } from '../../../../../../Interfaces/Producto';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-descripciones-productos-admi',
  standalone: true,
  imports: [CabeceraAdmiComponent, PieAdmiComponent, CommonModule,ReactiveFormsModule , FormsModule, CabeceraCatalogoAdmiComponent],
  templateUrl: './descripciones-productos-admi.component.html',
  styleUrl: './descripciones-productos-admi.component.css'
})
export class DescripcionesProductosAdmiComponent {
  producto: Producto | null = null;
  productoForm: FormGroup;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private fb: FormBuilder
  ) {
    this.productoForm = this.fb.group({
      title: ['', Validators.required],
      price: [0, Validators.required],
      description: ['', Validators.required],
      code: ['', Validators.required],
      category: ['', Validators.required],
      available: [false],
      isOnSale: [false],
      isFeatured: [false],
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadProduct(id);
    });
  }

  loadProduct(id: number): void {
    this.productService.getProductById(id).subscribe(
      (producto: Producto) => {
        this.producto = producto;
        this.productoForm.patchValue(producto);
      },
      (error) => {
        console.error('Error al cargar el producto:', error);
      }
    );
  }

  showConfirmation: boolean = false;
  showError: boolean = false;
  onSubmit(): void {
    if (this.producto && this.productoForm.valid) {
      const updatedProduct: Producto = {
        ...this.producto,
        ...this.productoForm.value
      };
      this.productService.updateProduct(updatedProduct).subscribe(
        (response) => {
          console.log('Producto actualizado con éxito:', response);
          this.showConfirmation = true;
          setTimeout(() => {
            this.showConfirmation = false;
            this.location.back(); // Volver a la página anterior después de actualizar
          }, 3000);
        },
        (error) => {
          console.error('Error al actualizar el producto:', error);
          this.showError = true;
          setTimeout(() => {
            this.showError = false;
          }, 3000);
        }
      );
    }
  }

  onCancel(): void {
    this.location.back(); // Volver a la página anterior al cancelar
  }
  

  showDeleteConfirmation: boolean = false;
  showErrorDelete: boolean = false;
  removeProduct() {
    if (this.producto && this.producto.id !== undefined) {
      this.productService.deleteProduct(this.producto.id).subscribe(
        () => {
          console.log('Producto eliminado con éxito');
          this.showDeleteConfirmation = true;
          setTimeout(() => {
            this.showDeleteConfirmation = false;
            this.location.back();
            /* this.router.navigate(['/ruta-a-lista-de-productos']); */ // Ajusta esta ruta
          }, 3000);
        },
        (error) => {
          console.error('Error al eliminar producto', error);
          this.showErrorDelete = true;
          setTimeout(() => {
            this.showErrorDelete = false;
          }, 3000);
        }
      );
    } else {
      console.error('El producto no tiene un ID definido');
      this.showErrorDelete = true;
      setTimeout(() => {
        this.showErrorDelete = false;
      }, 3000);
    }
  }
  /* 
  onSubmit(): void {
    if (this.producto && this.productoForm.valid) {
      const updatedProduct: Producto = {
        ...this.producto,
        ...this.productoForm.value
      };
      this.productService.updateProduct(updatedProduct).subscribe(
        (response) => {
          console.log('Producto actualizado con éxito:', response);
          // Aquí puedes agregar alguna notificación de éxito si lo deseas
        },
        (error) => {
          console.error('Error al actualizar el producto:', error);
          // Aquí puedes manejar el error, tal vez mostrar un mensaje al usuario
        }
      );
    } */
  }



