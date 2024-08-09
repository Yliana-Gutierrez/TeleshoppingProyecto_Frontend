import { Component } from '@angular/core';
import { PieAdmiComponent } from "../../../pie-admi/pie-admi.component";
import { CabeceraAdmiComponent } from "../../../cabecera-admi/cabecera-admi.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RolService } from '../../../../../../services/rol.service';
import { Router } from '@angular/router';
import { Rol } from '../../../../../../Interfaces/rol';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [PieAdmiComponent, CabeceraAdmiComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent {

      form: FormGroup;
      mensaje: string = '';
      mostrarPass: boolean = false;
    
      constructor(private fb: FormBuilder, private rolService: RolService, private router: Router) {
        this.form = this.fb.group({
          contrasenaActual: ['', Validators.required],
          nuevaContrasena:['', [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z]{2,})(?=.*\d{2,}).{8,}$/)
          ]],
          confirmarContrasena: ['', Validators.required]
        });
      }
    
      ActualizarContrasenaAdmi() {
        if (this.form.valid) {
          const contrasenaActual = this.form.get('contrasenaActual')?.value;
          const nuevaContrasena = this.form.get('nuevaContrasena')?.value;
          const confirmarContrasena = this.form.get('confirmarContrasena')?.value;
    
          if (nuevaContrasena === confirmarContrasena) {
            const rol: Rol = {
              password: nuevaContrasena,
              confirmarPassword: confirmarContrasena,
              usuario: ''
            };
    
            this.rolService.actualizarRolPorContraseña(contrasenaActual, rol).subscribe({
              next: () => {
                this.mensaje = 'Contraseña actualizada exitosamente';
                this.form.reset();
                setTimeout(() => {
                  this.router.navigate(['/autenticacion/administrador']);
                },2000);
              },
              error: (error) => {
                if (error.status === 404) {
                  this.mensaje = 'Contraseña incorrecta o no está registrada en el sistema';
                  this.form.reset();
                  setTimeout(() => {
                    this.router.navigate(['/autenticacion/administrador']);
                  },2000);
                } else {
                  this.mensaje = 'Error al actualizar la contraseña';
                  this.form.reset();
                  setTimeout(() => {
                    this.router.navigate(['/autenticacion/administrador']);
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