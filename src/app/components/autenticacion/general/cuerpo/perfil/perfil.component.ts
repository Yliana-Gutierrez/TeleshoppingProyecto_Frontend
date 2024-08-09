import { Component, OnInit} from '@angular/core';
import { CabeceraComponent } from "../../cabecera/cabecera.component";
import { PieComponent } from "../../pie/pie.component";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { UsuarioService } from '../../../../../services/usuario.service';
import { Usuario } from '../../../../../Interfaces/Usuario';


@Component({
    selector: 'app-perfil',
    standalone: true,
    templateUrl: './perfil.component.html',
    styleUrl: './perfil.component.css',
    imports: [CabeceraComponent, PieComponent, CommonModule, ReactiveFormsModule]
})
export class PerfilComponent implements OnInit{

form: FormGroup;
mensaje: string = '';

constructor(
  private fb: FormBuilder,
  private usuarioService: UsuarioService,
  private router: Router
) {
  this.form = this.fb.group({
    nombre: [''],
    apellido: [''],
    cedula: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    email: ['', [Validators.required, Validators.email]]
  });
}

ngOnInit(): void {}

// Método para recuperar datos en base a la cédula
obtenerDatos() {
  const cedula = this.form.get('cedula')?.value;
  if (cedula) {
    this.usuarioService.obtenerDatosBasicosPorCedula(cedula).subscribe({
      next: (usuario: Usuario) => {
        if (usuario) {
          this.form.patchValue({
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: usuario.email
          });
        } else {
          this.mensaje = 'Usuario no encontrado';
          this.form.reset();
          setTimeout(() => {
            this.router.navigate(['/autenticacion/general']);
          },3000); 
        }
      },
      error: (error) => {
        console.error('Error al obtener los datos básicos del usuario', error);
        this.mensaje = 'El CI que ingreso no existe, registrese';
        this.form.reset();
        setTimeout(() => {
          this.router.navigate(['/autenticacion/general']);
        },3000); 
      }
    });
  }
}

// Método para actualizar el usuario
Actualizar() {
  if (this.form.valid) {
    const cedula = this.form.get('cedula')?.value;
    const usuario: Usuario = {
      nombre: this.form.get('nombre')?.value,
      apellido: this.form.get('apellido')?.value,
      email: this.form.get('email')?.value,
      cedula: cedula // Mantener la cédula actual sin cambios
      ,
      password: '',
      confirmarPassword: ''
    };

    this.usuarioService.actualizarUsuarioPorCedula(cedula, usuario).subscribe({
      next: () => {
        this.mensaje = 'Usuario actualizado correctamente';
        this.form.reset();
        setTimeout(() => {
          this.router.navigate(['/autenticacion/general']);
        },2000); 
      },
      error: (error) => {
        console.error('Error al actualizar el usuario', error);
        this.mensaje = 'Error al actualizar el usuario';
        this.form.reset();
        setTimeout(() => {
          this.router.navigate(['/autenticacion/general']);
        },2000); 
      }
    });
  }
}
}

