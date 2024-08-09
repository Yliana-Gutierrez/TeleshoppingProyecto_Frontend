import { Component, OnInit } from '@angular/core';
import { CabeceraAdmiComponent } from "../../cabecera-admi/cabecera-admi.component";
import { PieAdmiComponent } from "../../pie-admi/pie-admi.component";
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../../../Interfaces/Usuario';
import { FormsModule } from '@angular/forms'; 
import { UsuarioService } from '../../../../../services/usuario.service';


@Component({
    selector: 'app-perfil-admi',
    standalone: true,
    templateUrl: './perfil-admi.component.html',
    styleUrl: './perfil-admi.component.css',
    imports: [CabeceraAdmiComponent, PieAdmiComponent, CommonModule, FormsModule]
})
export class PerfilAdmiComponent implements OnInit{

      registros: Usuario[] = []; 
      registrosFiltrados: Usuario[] = []; // Registros filtrados
      searchTermNombre: string = ''; // Término de búsqueda por nombre
      searchTermApellido: string = ''; // Término de búsqueda por apellido
      searchTermCedula: string = ''; // Término de búsqueda por cédula
      currentPage: number = 1; // Página actual
      itemsPerPage: number = 5; // Elementos por página
    
      constructor(private usuarioService: UsuarioService) { }
    
      ngOnInit(): void {
        this.usuarioService.obtenerTodosUsuarios().subscribe({
          next: (usuarios) => {
            this.registros = usuarios;
            this.filtrarRegistros(); // Filtrar los registros inicialmente
          }
        });
      }
    
      filtrarRegistros(): void {
        this.registrosFiltrados = this.registros.filter(registro =>
          (registro.nombre.toLowerCase().includes(this.searchTermNombre.toLowerCase()) || this.searchTermNombre === '') &&
          (registro.apellido.toLowerCase().includes(this.searchTermApellido.toLowerCase()) || this.searchTermApellido === '') &&
          (registro.cedula.toLowerCase().includes(this.searchTermCedula.toLowerCase()) || this.searchTermCedula === '')
        );
        this.currentPage = 1;
      }
    
      limpiarFiltro(): void {
        this.searchTermNombre = '';
        this.searchTermApellido = '';
        this.searchTermCedula = '';
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
