import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Usuario } from '../../../Interfaces/Usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  form: FormGroup;
  mostrarPass: boolean = false;


  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ["", [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z]{2,})(?=.*\d{2,}).{8,}$/)
      ]],
      confirmarPassword: ['', Validators.required]
    });
  }

  Registrarse() {
    if (this.form.valid && this.form.get('password')?.value === this.form.get('confirmarPassword')?.value) {
      const cedula = this.form.get('cedula')?.value;

      // Verificar si la cédula ya existe
      this.usuarioService.verificarCedula(cedula).subscribe({
        next: (exists) => {
          if (exists) {
            // El usuario ya está registrado
            alert('Usuario ya se encuentra registrado');
            this.form.reset();
            setTimeout(() => {
              this.router.navigate(['/autenticacion']);
            },2000); 
          } else {
            // La cédula no está registrada, proceder con el registro
            const registro: Usuario = this.form.value;
            this.usuarioService.crearRegistro(registro).subscribe({
              next: (data) => {
                console.log('Registro creado con ID:', data);
                alert('Usuario registrado correctamente');
                this.form.reset();
                setTimeout(() => {
                  this.router.navigate(['/autenticacion']);
                },2000); 
              },
              error: (error) => {
                console.error('Error al registrar usuario:', error);
                alert('Ocurrió un error al registrar el usuario');
                this.form.reset();
                setTimeout(() => {
                  this.router.navigate(['/autenticacion']);
                },2000); 

              },
              complete: () => {
                console.info('Registro de usuario completo');
                this.form.reset();
                setTimeout(() => {
                  this.router.navigate(['/autenticacion']);
                },2000); 
              }
            });
          }
        },
        error: (error) => {
          console.error('Error al verificar cédula:', error);
          alert('Ocurrió un error al verificar la cédula');
          this.form.reset();
          setTimeout(() => {
            this.router.navigate(['/autenticacion']);
          },2000); 

        }
      });
    } else {
      console.log('Formulario no válido');
      setTimeout(() => {
        this.router.navigate(['/autenticacion']);
      },2000); 
    }
  }

  mostrarContrasena() {
    this.mostrarPass = !this.mostrarPass;
  }
}
