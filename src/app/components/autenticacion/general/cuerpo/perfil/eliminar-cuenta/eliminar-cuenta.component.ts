import { Component } from '@angular/core';
import { CabeceraComponent } from "../../../cabecera/cabecera.component";
import { PieComponent } from "../../../pie/pie.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../../../../services/usuario.service';

@Component({
    selector: 'app-eliminar-cuenta',
    standalone: true,
    templateUrl: './eliminar-cuenta.component.html',
    styleUrl: './eliminar-cuenta.component.css',
    imports: [CabeceraComponent, PieComponent, CommonModule, ReactiveFormsModule]
})
export class EliminarCuentaComponent {

eliminarCuentaForm: FormGroup;
mensajeConfirmacion: string | null = null;
mensajeExito: string | null = null;

constructor(private fb: FormBuilder, private router: Router, private usuarioService: UsuarioService) {
  this.eliminarCuentaForm = this.fb.group({
    nombreUsuario: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.maxLength(10), Validators.minLength(10)]]
  });
}

eliminarCuenta() {
  const nombreUsuario = this.eliminarCuentaForm.get('nombreUsuario')?.value;
  this.mensajeConfirmacion = `¿Está seguro de que desea eliminar la cuenta con la cédula ${nombreUsuario}?`;
}

confirmarEliminacion() {
  const nombreUsuario = this.eliminarCuentaForm.get('nombreUsuario')?.value;
  this.usuarioService.eliminarUsuarioPorCedula(nombreUsuario).subscribe({
    next: () => {
      this.mensajeExito = 'Cuenta eliminada con éxito';
      this.mensajeConfirmacion = null;
      setTimeout(() => {
        this.router.navigate(['/autenticacion']);
      }, 2000);
    },
    error: (err) => {
      this.mensajeExito = null;
      this.mensajeConfirmacion = null;
      console.error('Error al eliminar la cuenta:', err);
    }
  });
}

cancelarEliminacion() {
  this.mensajeConfirmacion = null;
}
}
