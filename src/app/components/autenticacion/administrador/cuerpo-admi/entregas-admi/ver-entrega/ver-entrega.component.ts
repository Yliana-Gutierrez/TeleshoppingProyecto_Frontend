import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraAdmiComponent } from '../../../cabecera-admi/cabecera-admi.component';
import { PieAdmiComponent } from '../../../pie-admi/pie-admi.component';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EntregaService } from '../../../../../../services/entrega.service';


@Component({
  selector: 'app-ver-entrega',
  standalone: true,
  imports: [RouterModule,
    CabeceraAdmiComponent,
    PieAdmiComponent,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterLink, RouterOutlet

  ],
  templateUrl: './ver-entrega.component.html',
  styleUrl: './ver-entrega.component.css'
})
export class VerEntregaComponent {
  id: number;
  usuario!: String;
  ordenCompra!: String;
  estado!: number;
  descripcion!: String;
  nombreEmpresaTransporte!: String;
  fechaEnvio!: Date;
  numSeguimiento!: number;
  tipoTransporte!: String;
  fechaEntrega!: Date;
  direccionEntrega!: String;

  constructor(
    private _entregaService: EntregaService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.obtenerEntrega();
  }

  obtenerEntrega(): void{
    this._entregaService.getEntrega(this.id).subscribe({
      next: data => {
        console.log(data);
        this.usuario = data.usuario?.nombre || 'Autor desconocido';
        this.ordenCompra = data.ordenCompra || 'Autor desconocido';
        this.estado = data.estado || 0;
        this.descripcion = data.descripcion || 'Autor desconocido';
        this.nombreEmpresaTransporte = data.tipoTransporte?.empresaTransporte?.nombreEmpresa  || 'Autor desconocido';
        this.fechaEnvio = data.fechaEnvio;
        this.numSeguimiento = this.numSeguimiento ;
        this.tipoTransporte = data.tipoTransporte?.tipoTransporte || 'Autor desconocido';
        this.fechaEntrega = data.fechaEntrega ;
        this.direccionEntrega = data.direccionEntrega;
      },
      error: error => {
        
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de Entregas completaaaaaaaa');
      }
    });


  }


}
