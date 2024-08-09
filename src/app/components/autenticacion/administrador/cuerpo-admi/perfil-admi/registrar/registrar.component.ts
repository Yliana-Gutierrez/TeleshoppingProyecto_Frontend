import { Component} from '@angular/core';
import { PieAdmiComponent } from "../../../pie-admi/pie-admi.component";
import { CabeceraAdmiComponent } from "../../../cabecera-admi/cabecera-admi.component";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Rol } from '../../../../../../Interfaces/rol';
import { RolService } from '../../../../../../services/rol.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [PieAdmiComponent, CabeceraAdmiComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  form: FormGroup;
  mostrarPass: boolean = false;


  constructor(private fb: FormBuilder, private rolService: RolService, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z]{2,})(?=.*\d{2,}).{8,}$/)
      ]],
      confirmarPassword: ['', Validators.required]
    });
  }


  RegistrarAdmi() {
    if (this.form.valid && this.form.get('password')?.value === this.form.get('confirmarPassword')?.value) {
      const usuario = this.form.get('usuario')?.value;
  
      // Verificar si el usuario ya existe
      this.rolService.verificarUsuario(usuario).subscribe({
        next: exists => {
          if (exists) {
            // El usuario ya está registrado
            alert('Administrador ya se encuentra registrado');
            this.form.reset();
            setTimeout(() => {
              this.router.navigate(['/autenticacion/administrador']);
            },2000);

          } else {
            // El usuario no está registrado, proceder con el registro
            const rol: Rol = this.form.value;
            this.rolService.registrarRol(rol).subscribe({
              next: data => {
                console.log('Rol registrado con ID:', data);
                alert('Administrador registrado correctamente');
                this.form.reset();
                setTimeout(() => {
                  this.router.navigate(['/autenticacion/administrador']);
                },2000);

              },
              error: error => {
                console.error('Error al registrar administrador:', error);
                alert('Ocurrió un error al registrar el administrador');
                this.form.reset();
                setTimeout(() => {
                  this.router.navigate(['/autenticacion/administrador']);
                },2000);

              },
              complete: () => {
                console.info('Registro de administrador completo');
                this.form.reset();
                setTimeout(() => {
                  this.router.navigate(['/autenticacion/administrador']);
                },2000);
              }
            });
          }
        },
        error: error => {
          console.error('Error al verificar el usuario:', error);
          alert('Ocurrió un error al verificar el administrador');
          this.form.reset();

        }
      });
    } else {
      console.log('Formulario no válido');
    }
  }

  mostrarContrasena() {
    this.mostrarPass = !this.mostrarPass;
  }

}
