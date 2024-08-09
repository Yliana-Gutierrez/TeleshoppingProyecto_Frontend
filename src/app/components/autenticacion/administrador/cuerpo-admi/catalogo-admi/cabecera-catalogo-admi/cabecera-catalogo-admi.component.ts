import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera-catalogo-admi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecera-catalogo-admi.component.html',
  styleUrl: './cabecera-catalogo-admi.component.css'
})
export class CabeceraCatalogoAdmiComponent {
  dropdownOpen: boolean = false;
  subMenuOpen: { [key: string]: boolean } = {
    electronica: false,
    modayaccesorios: false,
    saludybelleza: false,
    ComputadorasyLaptops: false,
    ropa: false,
    bolsosycarteras: false,
  };

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleSubMenu(menu: string): void {
    this.subMenuOpen[menu] = !this.subMenuOpen[menu];
  }

  openSubMenu(menu: string): void {
    this.subMenuOpen[menu] = true;
  }

  closeSubMenu(menu: string): void {
    this.subMenuOpen[menu] = false;
  }
}
