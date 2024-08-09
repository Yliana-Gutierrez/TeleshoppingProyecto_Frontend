import { Component } from '@angular/core';
import { PieAdmiComponent } from "../../../pie-admi/pie-admi.component";
import { CabeceraAdmiComponent } from "../../../cabecera-admi/cabecera-admi.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Rol } from '../../../../../../Interfaces/rol';
import { RolService } from '../../../../../../services/rol.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [PieAdmiComponent, CabeceraAdmiComponent, CommonModule, FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  roles: Rol[] = []; 
    registrosFiltradosAdmi: Rol[] = []; // Roles filtrados
    searchTermUsuario: string = ''; // Término de búsqueda por usuario
    searchTerm: string = ''; // Término de búsqueda
    currentPage: number = 1; // Página actual
    itemsPerPage: number = 5; // Elementos por página


constructor(private rolService: RolService) { }

ngOnInit(): void {
  this.obtenerRoles();
}

obtenerRoles(): void {
  this.rolService.obtenerRoles().subscribe({
    next: (data) => {
      this.roles = data;
      this.filtrarRegistrosAdmi(); // Filtrar los registros después de obtener los datos
    },
    error: (error) => console.error('Error al obtener roles:', error)
  });
}

filtrarRegistrosAdmi(): void {
  this.registrosFiltradosAdmi = this.roles.filter(rol =>
    rol.usuario.toLowerCase().includes(this.searchTermUsuario.toLowerCase()) || this.searchTermUsuario === ''
  );
  this.currentPage = 1;
}

limpiarFiltroAdmi(): void {
  this.searchTermUsuario = '';
  this.filtrarRegistrosAdmi(); 
}

changePage(page: number): void {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
  }
}

get totalPages(): number {
  return Math.ceil(this.registrosFiltradosAdmi.length / this.itemsPerPage);
}

get pages(): number[] {
  const pagesCount = this.totalPages;
  return Array.from({ length: pagesCount }, (_, index) => index + 1);
}

}
