import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CabeceraAdmiComponent } from "../../cabecera-admi/cabecera-admi.component";
import { PieAdmiComponent } from "../../pie-admi/pie-admi.component";
import { Queja } from '../../../../../Interfaces/Queja';
import { QuejaService } from '../../../../../services/queja.service';

@Component({
    selector: 'app-quejas-admi',
    standalone: true,
    templateUrl: './quejas-admi.component.html',
    styleUrls: ['./quejas-admi.component.css'],
    imports: [CabeceraAdmiComponent, PieAdmiComponent ,CommonModule, FormsModule], 
})
export class QuejasAdmiComponent implements OnInit {
    quejas: Queja[] = [];
    paginatedQuejas: Queja[] = [];
    mensaje: string = '';
    currentPage: number = 1;
    itemsPerPage: number = 10;
    totalPages: number = 0;
    pages: number[] = [];
  
    constructor(private quejaService: QuejaService) {}
  
    ngOnInit(): void {
      this.obtenerQuejas();
    }
  
    obtenerQuejas(): void {
      this.quejaService.obtenerQuejas().subscribe(
        (data: Queja[]) => {
          this.quejas = data;
          this.totalPages = Math.ceil(this.quejas.length / this.itemsPerPage);
          this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
          this.cargarPagina(this.currentPage);
          console.log('Datos de quejas:', this.quejas);
        },
        (error) => this.mensaje = 'Error al cargar las quejas.'
      );
    }
  
    cargarPagina(page: number): void {
      this.currentPage = page;
      const start = (page - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      this.paginatedQuejas = this.quejas.slice(start, end);
    }
  
    previousPage(): void {
      if (this.currentPage > 1) {
        this.cargarPagina(this.currentPage - 1);
      }
    }
  
    nextPage(): void {
      if (this.currentPage < this.totalPages) {
        this.cargarPagina(this.currentPage + 1);
      }
    }
  
    goToPage(page: number): void {
      if (page >= 1 && page <= this.totalPages) {
        this.cargarPagina(page);
      }
    }
  
    applyFilter(event: any): void {
      const searchTerm = event.target.value.toLowerCase();
      this.quejas = this.quejas.filter(queja => 
        queja.nombreCliente.toLowerCase().includes(searchTerm) ||
        queja.email.toLowerCase().includes(searchTerm) ||
        new Date(queja.fecha).toLocaleDateString().includes(searchTerm)
      );
      this.totalPages = Math.ceil(this.quejas.length / this.itemsPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      this.cargarPagina(1);
    }
  
    limpiarFiltro(): void {
      this.obtenerQuejas();
    }
  
    actualizarEstado(queja: Queja, nuevoEstado: string): void {
      const quejaActualizada = { ...queja, estado: nuevoEstado };
      this.quejaService.actualizarQueja(queja.id!, quejaActualizada).subscribe(() => {
        this.obtenerQuejas();
        this.mensaje = 'Estado de la queja actualizado correctamente.';
      });
    }
  }