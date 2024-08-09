import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../Interfaces/Usuario';
import { Rol } from '../../Interfaces/rol';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-autenticacion',
  standalone: true,
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,  
    FormsModule,
  ]
})
export class AutenticacionComponent {
  

form: FormGroup;
  mostrarPass: boolean = false;
  mensajeError: string | null = null;

  constructor(private fb: FormBuilder, private router: Router, private usuarioService: UsuarioService, private rolService: RolService) {
    this.form = this.fb.group({
      cedula: ["", [Validators.required, Validators.minLength(10)]],
      password: ["", Validators.required]
    });
  }

    iniciarSesion() {
      // Obtener los valores del formulario
      const cedula = this.form.get('cedula')?.value;
      const password = this.form.get('password')?.value;
    
      // Crear el objeto Usuario
      const usuario: Usuario = {
        cedula: cedula,
        password: password,
        id: 0,
        nombre: '',
        apellido: '',
        email: '',
        confirmarPassword: ''
      };
    
      // Verificar credenciales de usuario
      this.usuarioService.verificarCredencialesUsuario(usuario).subscribe({
        next: (usuarioResponse) => {
          if (usuarioResponse) {
            // Si el usuario es válido, redirigir a la ruta de usuario
            this.router.navigateByUrl('/autenticacion/general');
          } else {
            this.verificarCredencialesRol(cedula, password);
          }
        },
        error: (err) => {
          if (err.status === 401) {
            // verificar las credenciales del rol
            this.verificarCredencialesRol(cedula, password);
          } else {
            // Otro tipo de error
            this.mensajeError = 'Error al verificar el usuario';
            console.error(err);
          }
        }
      });
    }
    
    // Método para verificar credenciales de rol
    verificarCredencialesRol(usuario: string, password: string) {
      const rol: Rol = {
        usuario: usuario,
        password: password,
        id: 0,
        confirmarPassword: ''
      };
    
      this.rolService.verificarCredencialesRol(rol).subscribe({
        next: (rolResponse) => {
          if (rolResponse) {
            // Si el rol es válido, redirigir a la ruta de administrador
            this.router.navigateByUrl('/autenticacion/administrador');
          } else {
            // Si ni el usuario ni el rol son válidos, mostrar mensaje de error
            this.mensajeError = 'Credenciales incorrectas';
          }
        },
        error: (err) => {
          this.mensajeError = 'Error al verificar el rol';
          console.error(err);
        }
      });
    }
    
  mostrarContrasena() {
    this.mostrarPass = !this.mostrarPass;
  }

  recuperarContrasena() {
    this.router.navigateByUrl('/autenticacion/recuperar-contrasena');
  }

  ventanaRegistro() {
    this.router.navigateByUrl('/autenticacion/registro');
  }
}
  
