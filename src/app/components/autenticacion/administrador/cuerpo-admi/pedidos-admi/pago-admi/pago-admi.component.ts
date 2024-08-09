import { Component, OnInit } from '@angular/core';
import { CabeceraAdmiComponent } from "../../../cabecera-admi/cabecera-admi.component";
import { PieAdmiComponent } from "../../../pie-admi/pie-admi.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  
import { PagoService } from '../../../../../../services/pago.service';
import { Pago } from '../../../../../../Interfaces/Pago';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-pago-admi',
    standalone: true,
    templateUrl: './pago-admi.component.html',
    styleUrl: './pago-admi.component.css',
    imports: [CabeceraAdmiComponent, PieAdmiComponent, CommonModule, FormsModule, RouterModule]
})
export class PagoAdmiComponent implements OnInit {
    registros: Pago[] = []; 
    registrosFiltrados: Pago[] = []; 
    searchTermIdentificacion: string = ''; 
    searchTermCliente: string = ''; 
    searchTermDireccion: string = ''; 
    currentPage: number = 1; 
    itemsPerPage: number = 5; 
  
    mensaje: string = '';
    mensajeTipo: string = '';
 
    constructor(private pagoService: PagoService, private router: Router) {}
  
    ngOnInit(): void {
      this.pagoService.obtenerPagos().subscribe({
        next: (pagos) => {
          this.registros = pagos;
          this.filtrarRegistros(); 
        },
        error: (error) => {
          console.error('Error al cargar pagos', error);
          this.mensaje = 'Error al cargar pagos.';
          this.mensajeTipo = 'error';
        }
      });
    }
  
    filtrarRegistros(): void {
      this.registrosFiltrados = this.registros.filter(registro =>
        (registro.identificacion.toLowerCase().includes(this.searchTermIdentificacion.toLowerCase()) || this.searchTermIdentificacion === '') &&
        (registro.cliente.toLowerCase().includes(this.searchTermCliente.toLowerCase()) || this.searchTermCliente === '') &&
        (registro.direccion.toLowerCase().includes(this.searchTermDireccion.toLowerCase()) || this.searchTermDireccion === '')
      );
      this.currentPage = 1;
    }
  
   editar(): void {
    this.router.navigate(['/administrador/cuerpo/pedidos-admi/actualizar-pago']);
    }

   

  
    eliminar(identificacion: string): void {
      if (confirm('¿Estás seguro de que quieres eliminar este pago?')) {
        this.pagoService.eliminarPago(identificacion).subscribe({
          next: () => {
            this.mensaje = 'Pago eliminado con éxito.';
            this.mensajeTipo = 'success';
            this.pagoService.obtenerPagos().subscribe({
              next: (pagos) => {
                this.registros = pagos;
                this.filtrarRegistros(); 
              },
              error: (error) => {
                console.error('Error al recargar pagos', error);
                this.mensaje = 'Error al recargar pagos.';
                this.mensajeTipo = 'error';
              }
            });
          },
          error: (error) => {
            console.error('Error al eliminar el pago', error);
            this.mensaje = 'Error al eliminar el pago.';
            this.mensajeTipo = 'error';
          }
        });
      }
    }
  
    limpiarFiltro(): void {
      this.searchTermIdentificacion = '';
      this.searchTermCliente = '';
      this.searchTermDireccion = '';
      this.filtrarRegistros(); 
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