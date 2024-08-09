import { Component, OnInit } from '@angular/core';
import { CabeceraAdmiComponent } from "../../cabecera-admi/cabecera-admi.component";
import { PieAdmiComponent } from "../../pie-admi/pie-admi.component";
import { Orden } from '../../../../../Interfaces/Orden';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrdenService } from '../../../../../services/orden.service';


@Component({
    selector: 'app-pedidos-admi',
    standalone: true,
    templateUrl: './pedidos-admi.component.html',
    styleUrl: './pedidos-admi.component.css',
    imports: [CabeceraAdmiComponent, PieAdmiComponent, FormsModule, CommonModule]
})
export class PedidosAdmiComponent {
  registros: Orden[] = []; 
  registrosFiltrados: Orden[] = []; 
  searchTermCodigo: string = ''; 
  searchTermCliente: string = ''; 
  searchTermProducto: string = ''; 
  currentPage: number = 1; 
  itemsPerPage: number = 5; 

  constructor(private ordenService: OrdenService) { }

  ngOnInit(): void {
    this.ordenService.obtenerOrdenes().subscribe({
      next: (ordenes) => {
        this.registros = ordenes;
        this.filtrarRegistros(); 
      }
    });
  }

  filtrarRegistros(): void {
    this.registrosFiltrados = this.registros.filter(registro =>
      (registro.codigo.toLowerCase().includes(this.searchTermCodigo.toLowerCase()) || this.searchTermCodigo === '') &&
      (registro.cliente.toLowerCase().includes(this.searchTermCliente.toLowerCase()) || this.searchTermCliente === '') &&
      (registro.producto.toLowerCase().includes(this.searchTermProducto.toLowerCase()) || this.searchTermProducto=== '')
    );
    this.currentPage = 1;
  }

  limpiarFiltro(): void {
    this.searchTermCodigo = '';
    this.searchTermCliente = '';
    this.searchTermProducto = '';
    this.filtrarRegistros(); // Filtrar de nuevo para mostrar todos los registros
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.registrosFiltrados.length / this.itemsPerPage);
  }

  get pages(): number[] {
    const pagesCount = this.totalPages;
    return Array.from({ length: pagesCount }, (_, index) => index + 1);
  }






}