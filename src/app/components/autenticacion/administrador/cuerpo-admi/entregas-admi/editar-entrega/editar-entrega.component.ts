import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CabeceraAdmiComponent } from '../../../cabecera-admi/cabecera-admi.component';
import { PieAdmiComponent } from '../../../pie-admi/pie-admi.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { EntregaService } from '../../../../../../services/entrega.service';
import { UsuarioService } from '../../../../../../services/usuario.service';
import { TipoTransporteService } from '../../../../../../services/tipo-transporte.service';
import { EmpresaTransporteService } from '../../../../../../services/empresa-transporte.service';

import { Empresatransporte } from '../../../../../../Interfaces/EmpresaTransporte';
import { Usuario } from '../../../../../../Interfaces/Usuario';
import { Entrega } from '../../../../../../Interfaces/Entrega';
import { TipoTransporte } from '../../../../../../Interfaces/TipoTransporte';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-entrega',
  standalone: true,
  templateUrl: './editar-entrega.component.html',
  styleUrls: ['./editar-entrega.component.css'],
  imports: [
    CabeceraAdmiComponent,
    PieAdmiComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterLink, RouterOutlet,
    RouterModule,
    ReactiveFormsModule
]
})

export class EditarEntregaComponent {

  form: FormGroup;
  id: number;
  listaEntrega!: Entrega[];
  listaUsuario!: Usuario[];
  listaTipoTransporte!: TipoTransporte[];
  listaEmpresaTransporte!: Empresatransporte[];

  tiposFiltrados: TipoTransporte[] = [];

  selectedEmpresaId!: string;
  selectedTipoTransporteId!: string;

  mensaje: string = '';
  mensajeTipo: string = '';

  constructor(private _EntregaService: EntregaService,
    private _UsuarioService: UsuarioService,
    private _EmpresaService: EmpresaTransporteService,
    private _TipoTransporte: TipoTransporteService,
    private router: Router,
    private fb: FormBuilder,
    private aRoute: ActivatedRoute
  )
    {
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
      this.form = this.fb.group({
        usuarioId:['', Validators.required],
        ordenCompra: ['', Validators.required],
        descripcion: ['', Validators.required],
        nombreEmpresaTransporte: ['', Validators.required],
        fechaEnvio: ['', Validators.required],
        numSeguimiento: ['', Validators.required],
        tipoTransporteId: ['', Validators.required],
        fechaEntrega: ['', Validators.required],
        direccionEntrega: ['', Validators.required],
      })

    }
    
  ngOnInit(): void {
    this.consultarUsuarios();
    this.consultarTiposTransporte();
    this.consultarTiposEmpresas();
  }


  consultarUsuarios(){
    this._UsuarioService.obtenerTodosUsuarios().subscribe({
      next: data => {
        console.log(data);
        this.listaUsuario = data;
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de Usuarios completa');
      }
    });

  }

  consultarTiposTransporte(){
    this._TipoTransporte.getTiposTransporte().subscribe({
      next: data => {
        console.log(data);
        this.listaTipoTransporte = data;
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de TiposTransporte completa');
      }
    });
  }

  consultarTiposEmpresas(){
    this._EmpresaService.getEmpresasTransporte().subscribe({
      next: data => {
        console.log(data);
        this.listaEmpresaTransporte = data;
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de Empresas completa');
      }
    });
  }

 
  onEmpresaChange(event: Event) {
    const empresaId = (event.target as HTMLSelectElement).value;
    this.tiposFiltrados = this.listaTipoTransporte.filter(tipo => tipo.empresaTransporteId === parseInt(empresaId));
  }

  
  modificarEntrega(){
   
    const selectedEmpresa = this.listaEmpresaTransporte.find(empresa => empresa.id === parseInt(this.form.value.nombreEmpresaTransporte));
 
    const selectedTipoTransporte = this.tiposFiltrados.find(tipo => tipo.id === parseInt(this.form.value.tipoTransporteId));
  
    const transporteString = `${selectedEmpresa?.nombreEmpresa}`;
  
  
    const entrega: Entrega = {
      id: this.id,
      usuarioId: this.form.value.usuarioId,
      ordenCompra: this.form.value.ordenCompra,
      estado: 1,
      descripcion: this.form.value.descripcion,
      nombreEmpresaTransporte: transporteString, 
      fechaEnvio: this.form.value.fechaEnvio,
      numSeguimiento: this.form.value.numSeguimiento,
      tipoTransporteId: this.form.value.tipoTransporteId,
      fechaEntrega: this.form.value.fechaEntrega,
      direccionEntrega: this.form.value.direccionEntrega
    };
    
    this._EntregaService.modificarEntrega(entrega).subscribe({
      next: data => {
        console.log(data);
        this.mensaje = 'La entrega se ha modificado exitosamente.';
        this.mensajeTipo = 'success';
      },
      error: error => {
        this.mensaje = 'Ocurrió un error al modificar la entrega.';
        this.mensajeTipo = 'error';
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Modificacion de Entrega completa');
      }
    });

    

  }

}
