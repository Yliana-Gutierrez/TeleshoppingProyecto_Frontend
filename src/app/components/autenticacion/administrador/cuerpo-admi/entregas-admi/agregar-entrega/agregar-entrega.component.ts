import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraAdmiComponent } from '../../../cabecera-admi/cabecera-admi.component';
import { PieAdmiComponent } from '../../../pie-admi/pie-admi.component';

import { Entrega } from '../../../../../../Interfaces/Entrega';
import { Usuario } from '../../../../../../Interfaces/Usuario';
import { TipoTransporte } from '../../../../../../Interfaces/TipoTransporte';
import { Empresatransporte } from '../../../../../../Interfaces/EmpresaTransporte';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet, RouterLink} from '@angular/router';

import { EmpresaTransporteService } from '../../../../../../services/empresa-transporte.service';
import { EntregaService } from '../../../../../../services/entrega.service';
import { UsuarioService } from '../../../../../../services/usuario.service';
import { TipoTransporteService } from '../../../../../../services/tipo-transporte.service';

@Component({
  selector: 'app-agregar-entrega',
  standalone: true,
  imports: [CabeceraAdmiComponent,
    PieAdmiComponent,
    CommonModule,
    FormsModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule],
  templateUrl: './agregar-entrega.component.html',
  styleUrl: './agregar-entrega.component.css'
})
export class AgregarEntregaComponent {

  form: FormGroup;

  listaEntrega!: Entrega[];
  listaUsuario!: Usuario[];
  listaTipoTransporte!: TipoTransporte[];
  listaEmpresaTransporte!: Empresatransporte[];

  tiposFiltrados: TipoTransporte[] = [];

  selectedEmpresaId!: string;
selectedTipoTransporteId!: string;


  constructor(private _EntregaService: EntregaService,
    private _UsuarioService: UsuarioService,
    private _EmpresaService: EmpresaTransporteService,
    private _TipoTransporte: TipoTransporteService,
    private router: Router,
    private fb: FormBuilder)
    {
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

  
  agregarEntrega(){
    // Obtén la empresa de transporte seleccionada
    const selectedEmpresa = this.listaEmpresaTransporte.find(empresa => empresa.id === parseInt(this.form.value.nombreEmpresaTransporte));
    // Obtén el tipo de transporte seleccionado
    const selectedTipoTransporte = this.tiposFiltrados.find(tipo => tipo.id === parseInt(this.form.value.tipoTransporteId));
  
    // Concatenar los nombres
    const transporteString = `${selectedEmpresa?.nombreEmpresa} - ${selectedTipoTransporte?.tipoTransporte}`;
  
    // Crear el objeto de entrega con el string concatenado
    const entrega: Entrega = {

      usuarioId: this.form.value.usuarioId,
      ordenCompra: this.form.value.ordenCompra,
      estado: 1,
      descripcion: this.form.value.descripcion,
      nombreEmpresaTransporte: transporteString,  // Guardar el string concatenado
      fechaEnvio: new Date(this.form.value.fechaEnvio),
      numSeguimiento: this.form.value.numSeguimiento,
      tipoTransporteId: this.form.value.tipoTransporteId,
      fechaEntrega: new Date(this.form.value.fechaEntrega),
      direccionEntrega: this.form.value.direccionEntrega
    };
  
    this._EntregaService.addEntrega(entrega).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Agregar Entrega completa');
        alert("Se agregó correctamente");
      }
    });
  }


}
