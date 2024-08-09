import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraAdmiComponent } from '../../../cabecera-admi/cabecera-admi.component';
import { PieAdmiComponent } from '../../../pie-admi/pie-admi.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmpresaTransporteService } from '../../../../../../services/empresa-transporte.service';

@Component({
  selector: 'app-agregar-empresas-transporte',
  standalone: true,
  templateUrl: './agregar-empresas-transporte.component.html',
  styleUrls: ['./agregar-empresas-transporte.component.css'],
  imports: [
    CabeceraAdmiComponent,
    PieAdmiComponent,
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule
  ]
})


export class AgregarEmpresasTransporteComponent{

  
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private empresaTransporteService: EmpresaTransporteService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombreEmpresa: ['', Validators.required],
      ruc: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
    });
  }

  agregarEmpresaTransporte() {
    if (this.form.valid) {
      const empresaTransporte = this.form.value;
      empresaTransporte.estado = 1;
      this.empresaTransporteService.addEmpresatransporte(empresaTransporte).subscribe({
        next: () => {
          alert("Empresa de Transporte agregada exitosamente");
        },
        error: (error) => {
          console.error("Error al agregar empresa de transporte:", error);
          alert("Ocurrió un error al agregar la empresa de transporte");
        }
      });
    }
  }
}