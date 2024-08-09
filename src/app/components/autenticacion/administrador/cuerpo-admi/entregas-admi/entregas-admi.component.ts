import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraAdmiComponent } from '../../cabecera-admi/cabecera-admi.component';
import { PieAdmiComponent } from '../../pie-admi/pie-admi.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EntregaService } from '../../../../../services/entrega.service';
import { Entrega } from '../../../../../Interfaces/Entrega';
import { RouterModule } from '@angular/router';


@Component({
selector: 'app-entregas-admi',
standalone: true,
templateUrl: './entregas-admi.component.html',
styleUrls: ['./entregas-admi.component.css'],
imports: [
CabeceraAdmiComponent,
PieAdmiComponent,
CommonModule,
FormsModule,
HttpClientModule,
RouterLink, RouterOutlet,
RouterModule
]
})

export class EntregasAdmiComponent {

  id!: number;
    listadoEntregas: Entrega[] = [];
    filtradoEntregas: Entrega[] = []; // Definimos la propiedad filtradoEntregas
    paginatedEntregas: Entrega[] = [];
    currentPage: number = 1;
    itemsPerPage: number = 5;
    totalPages: number = 1;
    totalPagesArray: number[] = [];

    filtroUsuario: string = '';
    filtroEmpresaTransporte: string = '';
    filtroTipoTransporte: string = '';
    
      constructor(private _entregaService : EntregaService, private router: Router,) {}

      ngOnInit(): void {
        this.obtenerEntregas();
      /*
        this.calculateTotalPages();
        this.updatePaginatedEntregas();
      */
      }
    
  obtenerEntregas(): void {
  this._entregaService.getEntregas().subscribe({
    next: data => {
      console.log('Datos obtenidos:', data); // Verifica aquí si hay 6 elementos
      this.listadoEntregas = data;
      this.aplicarFiltros();
    },
    error: error => {
      alert("Ocurrió un error");
    },
    complete: () => {
      console.info('Obtención de Entregas completa');
    }
  });
}


    aplicarFiltros(): void {
      this.filtradoEntregas = [...this.listadoEntregas];
    
      if (this.filtroUsuario) {
        this.filtradoEntregas = this.filtradoEntregas.filter(e =>
          e.usuario?.nombre?.toLowerCase().includes(this.filtroUsuario.toLowerCase())
        );
      }
    
      if (this.filtroEmpresaTransporte) {
        this.filtradoEntregas = this.filtradoEntregas.filter(e =>
          e.tipoTransporte?.empresaTransporte?.nombreEmpresa?.toLowerCase().includes(this.filtroEmpresaTransporte.toLowerCase())
        );
      }
    
      if (this.filtroTipoTransporte) {
        this.filtradoEntregas = this.filtradoEntregas.filter(e =>
          e.tipoTransporte?.tipoTransporte?.toLowerCase().includes(this.filtroTipoTransporte.toLowerCase())
        );
      }
      
      this.calculateTotalPages();
      this.updatePaginatedEntregas();
    }
    
  
      editar(){
        this.router.navigate(['/editar']);
      }

      
  calculateTotalPages(): void {
  this.totalPages = Math.ceil(this.filtradoEntregas.length / this.itemsPerPage);
  this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
}

updatePaginatedEntregas(): void {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = Math.min(startIndex + this.itemsPerPage, this.filtradoEntregas.length);
  this.paginatedEntregas = this.filtradoEntregas.slice(startIndex, endIndex);
}


  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
        this.updatePaginatedEntregas();
    }
}

      eliminarLibro(id?: number ){

        if (id === undefined) {
          alert('El ID del Entrega es indefinido');
          return;
        }
    
        this._entregaService.meliminarEntrega(id).subscribe({
          next: data => {
            console.log('Entrega eliminado:', data);
            this.obtenerEntregas();
          },
          error: error => {
            alert("Ocurrió un error");
          },
          complete: () => {
            console.info('Eliminacion de Entrega completa');
            
          }
        });        
  }
    // Método para actualizar los filtros cuando el texto cambia
    onFilterChange(): void {
      this.aplicarFiltros();
      if (!this.filtroUsuario && !this.filtroEmpresaTransporte && !this.filtroTipoTransporte) {
        this.filtradoEntregas = [...this.listadoEntregas]; // Resetea la lista filtrada a la original
      }
      this.calculateTotalPages();
      this.updatePaginatedEntregas();
    }
    

}