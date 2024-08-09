import { Component, OnInit } from '@angular/core';
import { CabeceraComponent } from "../../cabecera/cabecera.component";
import { PieComponent } from "../../pie/pie.component";
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { Product } from '../../../../../models/Product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CompraService } from '../../../../../services/compra.service';
import { Compra } from '../../../../../Interfaces/Compra';


@Component({
  selector: 'app-pedidos',
  standalone: true,
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css',
  imports: [CabeceraComponent, PieComponent, FormsModule, CommonModule, ReactiveFormsModule]
})
export class PedidosComponent implements OnInit {
  form: FormGroup;
  mostrarTablaYBoton = false;
  fechaActual: string = '';


  
  constructor(private fb: FormBuilder, private router: Router, private compraService: CompraService) {
    this.form = this.fb.group({
      producto: ['', Validators.required],
      cantidad: [0, [Validators.required, Validators.min(0)]],
      precio: [0, [Validators.required, Validators.min(0)]],
      precioTotal: [{ value: 0, disabled: true }],
      codigo: [''],
      cliente: [''],
      productos: [''],
      fecha: [''],
      total: ['']
    });
  }
  
  ngOnInit(): void {
    this.onChanges();
    this.loadProductos(); 
  }
  
  compra: Compra= {
    nombre: '',
    cantidad: 0,
    precioUnitario: 0,
    precioTotal: 0,
    estado: ''
  };
  compras: Compra[] = [];
  
  onChanges(): void {
    this.form.get('cantidad')?.valueChanges.subscribe(() => this.calculateTotal());
    this.form.get('precio')?.valueChanges.subscribe(() => this.calculateTotal());
  }
  

  calculateTotal(): void {
    const cantidad = this.form.get('cantidad')?.value || 0;
    const precio = this.form.get('precio')?.value || 0;
    const total = cantidad * precio;
    this.form.get('precioTotal')?.setValue(total, { emitEvent: false });
  }
  
  addProduct(): void {
    if (this.form.valid) {
      const nuevoProducto: Compra = {
        nombre: this.form.get('producto')?.value || '',
        cantidad: this.form.get('cantidad')?.value || 0,
        precioUnitario: this.form.get('precio')?.value || 0,
        precioTotal: this.form.get('precioTotal')?.value || 0,
        estado: 'Agregado'
      };
  
      this.compraService.agregarCompra(nuevoProducto).subscribe(id => {
        this.compras.push(nuevoProducto); // Actualiza la lista de productos
        this.form.reset(); // Limpia el formulario
        this.mostrarTablaYBoton = true;
      });
    }
  }
  
  removeProduct(index: number): void {
    const productoNombre = this.compras[index].nombre;
  
    this.compraService.eliminarCompra(productoNombre).subscribe(() => {
      this.compras.splice(index, 1); 
      this.mostrarTablaYBoton = this.compras.length > 0; 
    });
  }
  
  generarOrden(): void {
    this.router.navigateByUrl('/autenticacion/general/cuerpo/generarorden');
  }
  
  loadProductos(): void {
    this.compraService.obtenerCompra().subscribe(compras => {
      this.compras = compras;
      this.mostrarTablaYBoton = this.compras.length > 0; 
    });
  }

  


}