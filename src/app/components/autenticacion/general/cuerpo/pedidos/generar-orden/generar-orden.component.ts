import { Component, OnInit } from '@angular/core';
import { PieComponent } from "../../../pie/pie.component";
import { CabeceraComponent } from "../../../cabecera/cabecera.component";
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Orden } from '../../../../../../Interfaces/Orden';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Compra } from '../../../../../../Interfaces/Compra';
import { CompraService } from '../../../../../../services/compra.service';
import { OrdenService } from '../../../../../../services/orden.service';


@Component({
    selector: 'app-generar-orden',
    standalone: true,
    templateUrl: './generar-orden.component.html',
    styleUrl: './generar-orden.component.css',
    imports: [PieComponent, CabeceraComponent, ReactiveFormsModule, CommonModule]
})
export class GenerarOrdenComponent implements OnInit{


ordenForm: FormGroup;
compras: Compra[] = [];
ordenes: Orden[] = [];
codigoGenerado: string = '';
fechaActual: string = '';
total: number = 0;
mostrarOrdenes: boolean = true;
mensajeExito: string = '';
ordenEditadaIndex: number | null = null;

constructor(
  private fb: FormBuilder,
  private compraService: CompraService,
  private ordenService: OrdenService,
  private router: Router
) {
  this.ordenForm = this.fb.group({
    codigo: [{ value: '', disabled: false }, Validators.required],
    cliente: ['', Validators.required],
    fecha: [{ value: '', disabled: false }, Validators.required],
    total: [{ value: '', disabled: false }, Validators.required],
    productos: [''], 
    estado: ['Generado']
  });
}

ngOnInit(): void {
  this.generarCodigo();
  this.establecerFecha();
  this.cargarProductos();
}

cargarProductos(): void {
  this.compraService.obtenerCompra().subscribe(compras => {
    this.compras = compras;
    this.calcularTotal();
    this.updateProductosTextArea();  // Actualiza el textarea con los productos
  });
}

calcularTotal(): void {
  this.total = this.compras.reduce((sum, compra) => sum + (compra.precioTotal ?? 0), 0);
  this.ordenForm.get('total')?.setValue(this.total);
}

generarCodigo(): void {
  this.codigoGenerado = Math.floor(1000 + Math.random() * 9000).toString();
  this.ordenForm.get('codigo')?.setValue(this.codigoGenerado);
}

establecerFecha(): void {
  const hoy = new Date();
  this.fechaActual = hoy.toISOString().split('T')[0];
  this.ordenForm.get('fecha')?.setValue(this.fechaActual);
}

updateProductosTextArea(): void {
  const productosText = this.convertProductosToString(this.compras);
  this.ordenForm.get('productos')?.setValue(productosText);
}

convertProductosToString(productos: Compra[]): string {
  return productos.map(producto =>
    `Nombre: ${producto.nombre}, Cantidad: ${producto.cantidad}, Precio Unitario: ${producto.precioUnitario}`
  ).join('\n');
}

agregarOrden(): void {
  if (this.ordenForm.invalid) {
    return;
  }

  const productosString = this.ordenForm.get('productos')?.value;

  const nuevaOrden: Orden = {
    codigo: this.ordenForm.get('codigo')?.value,
    cliente: this.ordenForm.get('cliente')?.value,
    fecha: this.ordenForm.get('fecha')?.value,
    producto: productosString, 
    productos: this.compras,
    total: this.ordenForm.get('total')?.value,
    estado: this.ordenForm.get('estado')?.value,
  };

  if (this.ordenEditadaIndex !== null) {
    this.ordenes[this.ordenEditadaIndex] = nuevaOrden;
    this.ordenEditadaIndex = null;
  } else {
    this.ordenes.push(nuevaOrden);
  }

  this.mensajeExito = 'Orden agregada con éxito';
  this.resetearFormulario();
}



resetearFormulario(): void {
  this.ordenForm.reset({
    codigo: this.generarCodigo(),
    cliente: '',
    fecha: this.establecerFecha(),
    total: '',
    productos: '', 
    estado: 'Generado'
  });
  this.total = 0;
}


confirmarOrden(orden: Orden): void {
  this.ordenService.crearOrden(orden).subscribe(
    response => {
      this.mensajeExito = 'Orden confirmada con éxito';
      this.ordenes = this.ordenes.filter(o => o.codigo !== orden.codigo); 
      this.resetearFormulario();
      setTimeout(() => {
        this.router.navigate(['/autenticacion/general']);
      }, 2000);
    },
    error => {
      console.error('Error al confirmar la orden:', error);
      this.mensajeExito = 'Orden Generada con éxito';
      this.resetearFormulario();
      setTimeout(() => {
        this.router.navigate(['/autenticacion/general']);
      }, 2000);
    }
  );
}

editarOrden(id?: number): void {
  this.ordenEditadaIndex = this.ordenes.findIndex(orden => orden.id === id);
  if (this.ordenEditadaIndex !== null) {
    const orden = this.ordenes[this.ordenEditadaIndex];
    this.ordenForm.patchValue({
      codigo: orden.codigo,
      cliente: orden.cliente,
      fecha: orden.fecha,
      total: orden.total,
      productos: orden.producto, 
      estado: orden.estado
    });
  }
}

eliminarOrden(id?: number): void {
  if (id !== 1) {
    if (confirm('¿Estás seguro de que deseas eliminar esta orden?')) {
      this.ordenes = this.ordenes.filter(orden => orden.id !== id);
      this.mensajeExito = 'Orden eliminada con éxito';
      setTimeout(() => {
        this.router.navigate(['/autenticacion/general']);
      }, 1000);
    }
  } else {
    console.error('ID no definido para eliminar la orden.');
  }
}



resetearMensaje(): void {
  setTimeout(() => {
    this.mensajeExito = '';
  }, 5000); 
}
}


