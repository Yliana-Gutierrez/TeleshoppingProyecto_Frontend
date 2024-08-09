import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from '../../../cabecera/cabecera.component';
import { PieComponent } from '../../../pie/pie.component';
import { CabeceraCatalogoComponent } from '../cabecera-catalogo/cabecera-catalogo.component';
import { ProductService } from '../../../../../../services/product.service';
import { Producto } from '../../../../../../Interfaces/Producto';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-descripciones-productos',
  standalone: true,
  imports: [CabeceraCatalogoComponent, PieComponent, CommonModule, FormsModule, CabeceraComponent],
  templateUrl: './descripciones-productos.component.html',
  styleUrl: './descripciones-productos.component.css'
})
export class DescripcionesProductosComponent {
  producto: Producto | null = null;
  showConfirmation: boolean = false;
  showError: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private router: Router
  ) { }

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
      },
      (error) => {
        console.error('Error al cargar el producto:', error);
      }
    );
  }


  onCancel(): void {
    this.location.back();
  }

  onBuy(): void {
    if (this.producto) {
      // Aquí puedes implementar la lógica de compra
      // Por ejemplo, navegar a una página de compra o agregar al carrito
      console.log('Iniciando proceso de compra para:', this.producto);
      // this.router.navigate(['/checkout', this.producto.id]);
      // O
      // this.cartService.addToCart(this.producto);
      // this.router.navigate(['/cart']);
    } else {
      console.error('No se puede comprar: producto no definido');
    }
  }
}