import { Component } from '@angular/core';
import { CabeceraAdmiComponent } from "../../../cabecera-admi/cabecera-admi.component";
import { PieAdmiComponent } from "../../../pie-admi/pie-admi.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Proveedor } from '../../../../../../Interfaces/Proveedor';
import { ProveedorService } from '../../../../../../services/proveedor.service';

@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [CabeceraAdmiComponent, PieAdmiComponent, CommonModule, FormsModule, RouterLink, RouterOutlet ],
  templateUrl: './proveedor.component.html',
  styleUrl: './proveedor.component.css'
})
export class ProveedorComponent {
  id!:number;
  proveedores: Proveedor[] = [];
    listaProveedores: Proveedor[] = [];
    searchTerm: string = '';
    currentPage: number = 1;
    itemsPerPage: number = 5;
    searchTermNombre: string = '';
    searchTermOrigen: string = '';
    

    constructor(private proveedorService: ProveedorService) { }

    ngOnInit(): void {
      this.obtenerProveedores();
    }

    obtenerProveedores(): void {
      this.proveedorService.obtenerProveedores().subscribe({
        next: (data) => {
          this.proveedores = data;
          this.filtrarProveedores();
        },
        error: (error) => console.error('Error al obtener proveedores:', error)
      });
    }

    filtrarProveedores(): void {
        this.listaProveedores = this.proveedores.filter(proveedor =>
          proveedor.nombre.toLowerCase().includes(this.searchTermNombre.toLowerCase()) &&
          proveedor.origen.toLowerCase().includes(this.searchTermOrigen.toLowerCase()) &&
          (this.searchTerm === '' ||
            proveedor.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            proveedor.contacto.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            proveedor.origen.toLowerCase().includes(this.searchTerm.toLowerCase()))
        );
      this.currentPage = 1;
    }
    

    eliminarProveedor(id?: number ){

      if (id === undefined) {
        alert('El ID del proveedor es indefinido');
        return;
      }
      this.proveedorService.eliminarProveedor(id).subscribe({
        next: data => {
          console.log('Proveedor eliminado:', data);
          this.obtenerProveedores();
        },
        error: error => {
          alert("Ocurrió un error");
        },
        complete: () => {
          console.info('Eliminacion de proveedor completa');
        }
      });
    }


    limpiarFiltro(): void {
      this.searchTerm = '';
      this.searchTermNombre = '';
      this.searchTermOrigen = '';
      this.filtrarProveedores();
    }
    
    changePage(page: number): void {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
    }

    get totalPages(): number {
        return Math.ceil(this.listaProveedores.length / this.itemsPerPage);
    }

    get pages(): number[] {
        const pagesCount = this.totalPages;
        return Array.from({ length: pagesCount }, (_, index) => index + 1);
    }

}
