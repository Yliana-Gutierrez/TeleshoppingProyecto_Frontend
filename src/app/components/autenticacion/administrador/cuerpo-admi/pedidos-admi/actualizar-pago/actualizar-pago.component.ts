import { Component, OnInit } from '@angular/core';
import { CabeceraAdmiComponent } from "../../../cabecera-admi/cabecera-admi.component";
import { PieAdmiComponent } from "../../../pie-admi/pie-admi.component";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PagoService } from '../../../../../../services/pago.service';
import { CommonModule } from '@angular/common';
import { Pago } from '../../../../../../Interfaces/Pago';

@Component({
  selector: 'app-actualizar-pago',
  standalone: true,
  imports: [CabeceraAdmiComponent, PieAdmiComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './actualizar-pago.component.html',
  styleUrl: './actualizar-pago.component.css'
})
export class ActualizarPagoComponent implements OnInit{

actualizarPagoForm: FormGroup;
mensaje: string = '';

constructor(
  private fb: FormBuilder,
  private pagoService: PagoService,
  private router: Router
) {
  this.actualizarPagoForm = this.fb.group({
    identificacion: ['', Validators.required],
    cliente: [{ value: '', disabled: true }, Validators.required],
    direccion: ['', Validators.required],
    telefono: ['', Validators.required],
    tipo: [{ value: '', disabled: true }, Validators.required],
    detalles: [{ value: '', disabled: true }, Validators.required],
    estado: [{ value: '', disabled: true }, Validators.required],
  });
}

ngOnInit(): void {
  this.actualizarPagoForm.get('identificacion')?.valueChanges.subscribe(value => {
    if (value && value.length === 10) { 
      this.buscarPago(value);
    }
  });
}


buscarPago(identificacion: string): void {
  this.pagoService.obtenerPagoPorIdentificacion(identificacion).subscribe(
    (pago: Pago) => {
      if (pago) {
        this.actualizarPagoForm.patchValue({
          cliente: pago.cliente || '',
          direccion: pago.direccion || '',
          telefono: pago.telefono || '',
          tipo: pago.tipo || '',
          detalles: pago.detalles || '',
          estado: pago.estado || ''
        });
      } else {
        console.error('Pago no encontrado');
      }
    },
    (error) => {
      console.error('Error al obtener datos del pago', error);
    }
  );
}


Actualizar() {
  if (this.actualizarPagoForm.valid) {
    const identificacion = this.actualizarPagoForm.get('identificacion')?.value;
    const pago: Pago = {
      cliente: this.actualizarPagoForm.get('cliente')?.value,
      direccion: this.actualizarPagoForm.get('direccion')?.value,
      telefono: this.actualizarPagoForm.get('telefono')?.value,
      tipo: this.actualizarPagoForm.get('tipo')?.value,
      detalles: this.actualizarPagoForm.get('detalles')?.value,
      estado: this.actualizarPagoForm.get('estado')?.value,
      identificacion: identificacion // Mantener la identificacion actual sin cambios
      ,
      numTarjeta: '',
      expiracion: '',
      codigoSeguridad: ''
    
    };

    this.pagoService.actualizarPagoPorIdentificacion(identificacion, pago).subscribe({
      next: () => {
        this.mensaje = 'Pago actualizado correctamente';
        this.actualizarPagoForm.reset();

        // Esperar 2 segundos (2000 milisegundos) antes de redirigir
        setTimeout(() => {
          this.router.navigate(['/autenticacion/administrador/cuerpo/pago-admi']);
        }, 1000); 

      },
      error: (error) => {
        console.error('Error al actualizar el usuario', error);
        this.mensaje = 'Error al actualizar el usuario';
        this.actualizarPagoForm.reset();

         // Esperar 2 segundos (2000 milisegundos) antes de redirigir
         setTimeout(() => {
          this.router.navigate(['/autenticacion/administrador/cuerpo/pago-admi']);
        }, 1000); 

      }
    });
  }
}


}

