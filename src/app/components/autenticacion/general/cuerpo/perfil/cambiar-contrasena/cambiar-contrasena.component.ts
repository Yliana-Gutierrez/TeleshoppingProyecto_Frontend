import { Component } from '@angular/core';
import { CabeceraComponent } from "../../../cabecera/cabecera.component";
import { PieComponent } from "../../../pie/pie.component";
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../../../../../services/usuario.service';
import { Usuario } from '../../../../../../Interfaces/Usuario';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cambiar-contrasena',
    standalone: true,
    templateUrl: './cambiar-contrasena.component.html',
    styleUrl: './cambiar-contrasena.component.css',
    imports: [CabeceraComponent, PieComponent, ReactiveFormsModule, CommonModule]
})
export class CambiarContrasenaComponent {

    form: FormGroup;
    mensaje: string = '';
    mostrarPass: boolean = false;



  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router:Router) {
    this.form = this.fb.group({
      contrasenaActual: ['', Validators.required],
      nuevaContrasena: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z]{2,})(?=.*\d{2,}).{8,}$/)
      ]],
      confirmarContrasena: ['', Validators.required]
    });
  }

ActualizarContrasena() {
  if (this.form.valid) {
    const contrasenaActual = this.form.get('contrasenaActual')?.value;
    const nuevaContrasena = this.form.get('nuevaContrasena')?.value;
    const confirmarContrasena = this.form.get('confirmarContrasena')?.value;

    if (nuevaContrasena === confirmarContrasena) {
      const usuario: Usuario = {
        password: nuevaContrasena,
        confirmarPassword: confirmarContrasena,
        nombre: '',
        apellido: '',
        cedula: '',
        email: ''
      };

      this.usuarioService.actualizarUsuarioPorContraseña(contrasenaActual, usuario).subscribe({
        next: () => {
          this.mensaje = 'Contraseña actualizada exitosamente';
          this.form.reset();
          setTimeout(() => {
            this.router.navigate(['/autenticacion/general']);
          },2000); 
        },
        error: (error) => {
          if (error.status === 404) {
            this.mensaje = 'Contraseña incorrecta o usuario no encontrado';
            setTimeout(() => {
              this.router.navigate(['/autenticacion/general']);
            },2000); 
          } else {
            this.mensaje = 'Error al actualizar la contraseña';
            setTimeout(() => {
              this.router.navigate(['/autenticacion/general']);
            },2000); 
          }
          console.error('Error al actualizar la contraseña', error);
        }
      });
    } else {
      this.mensaje = 'Las contraseñas no coinciden';
    }
  }
}

mostrarContrasena() {
  this.mostrarPass = !this.mostrarPass;
}

}