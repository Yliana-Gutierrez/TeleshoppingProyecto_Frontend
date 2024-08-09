import { Component, OnInit} from '@angular/core';
import { CabeceraComponent } from "../../../cabecera/cabecera.component";
import { PieComponent } from "../../../pie/pie.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pago } from '../../../../../../Interfaces/Pago';
import { PagoService } from '../../../../../../services/pago.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pago',
    standalone: true,
    templateUrl: './pago.component.html',
    styleUrl: './pago.component.css',
    imports: [CabeceraComponent, PieComponent,CommonModule, ReactiveFormsModule]
})

export class PagoComponent implements OnInit{

form: FormGroup;
mensaje: string | undefined;

constructor(private fb: FormBuilder, private pagoService: PagoService, private router: Router) {
  this.form = this.fb.group({
    identificacion: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    cliente: ['', Validators.required],
    direccion: ['', Validators.required],
    telefono: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    tipo:  ['Tarjeta', Validators.required],
    detalles: ['', Validators.required],
    estado:  ['Pagado', Validators.required],
    numTarjeta: [''],
    expiracion: [''],
    codigoSeguridad: [''],
  });
}

ngOnInit(): void {}

Agregar(): void {
  if (this.form.valid) {
    const pago: Pago = this.form.value;
    this.pagoService.crearPago(pago).subscribe(
      response => {
        this.mensaje = 'Pago realizado correctamente.';
        setTimeout(() => {
          this.router.navigate(['/autenticacion/general']);
        }, 2000); 
      },
      error => {
        console.error('Error al crear el pago:', error);
        this.mensaje = 'Error al crear el pago. Intente nuevamente.';
        setTimeout(() => {
          this.router.navigate(['/autenticacion/general']);
        },2000); 
      }
    );
  } else {
    this.mensaje = 'Por favor, complete el formulario correctamente.';
   
  }
}
}