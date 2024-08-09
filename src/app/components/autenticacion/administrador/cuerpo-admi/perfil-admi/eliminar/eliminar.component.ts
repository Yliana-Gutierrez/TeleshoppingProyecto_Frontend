import { Component } from '@angular/core';
import { PieAdmiComponent } from "../../../pie-admi/pie-admi.component";
import { CabeceraAdmiComponent } from "../../../cabecera-admi/cabecera-admi.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RolService } from '../../../../../../services/rol.service';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [PieAdmiComponent, CabeceraAdmiComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {
  eliminarForm: FormGroup;
  mensajeConfirmacion: string | null = null;
  mensajeExito: string | null = null;
  mostrarPass: boolean = false;

constructor(private fb: FormBuilder, private rolService: RolService, private router: Router) {
  this.eliminarForm = this.fb.group({
    nombreUsuarioAdmi: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.maxLength(10), Validators.minLength(10)]]
  });
}

eliminarAdmi() {
  const nombreUsuarioAdmi = this.eliminarForm.get('nombreUsuarioAdmi')?.value;
  this.mensajeConfirmacion = `¿Está seguro de que desea eliminar la cuenta con el usuario ${nombreUsuarioAdmi}?`;
}

confirmarEliminacionAdmi() {
  const nombreUsuarioAdmi = this.eliminarForm.get('nombreUsuarioAdmi')?.value;
  this.rolService.eliminarRol(nombreUsuarioAdmi).subscribe({
    next: () => {
      this.mensajeExito = 'Cuenta eliminada con éxito';
      this.mensajeConfirmacion = null;
      setTimeout(() => {
        this.router.navigate(['/']); // Redirige a la página principal 
      }, 2000);
    },
    error: (error) => {
      console.error('Error al eliminar la cuenta:', error);
      this.mensajeExito = 'Error al eliminar la cuenta';
      this.mensajeConfirmacion = null;
      this.eliminarForm.reset();
    }
  });
}

cancelarEliminacionAdmi() {
  this.mensajeConfirmacion = null;
}

}
