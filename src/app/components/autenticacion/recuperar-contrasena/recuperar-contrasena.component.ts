import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent {

form: FormGroup;
contrasenaRecuperada: string | null = null;
mensajeError: string | null = null;

constructor(private fb: FormBuilder, private router: Router, private usuarioService: UsuarioService) {
  this.form = this.fb.group({
    cedula: ['', Validators.required]
  });
}

recuperarContrasena() {
  const cedula = this.form.get('cedula')?.value;

  this.usuarioService.recuperarContrasenaPorCedula(cedula).subscribe({
    next: (data) => {
      this.contrasenaRecuperada = data.contrasena;
      this.mensajeError = null;
      this.form.reset();
      setTimeout(() => {
        this.router.navigate(['/autenticacion']);
      },3000); 
    },
    error: (err) => {
      this.contrasenaRecuperada = null;
      this.mensajeError = 'El usuario no existe, por favor regístrese.';
      this.form.reset();
      setTimeout(() => {
        this.router.navigate(['/autenticacion']);
      },3000); 
    }
  });
}
}