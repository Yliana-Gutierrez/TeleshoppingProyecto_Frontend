import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-cabecera-admi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecera-admi.component.html',
  styleUrl: './cabecera-admi.component.css'
})
export class CabeceraAdmiComponent {
  dropdowns: { [key: string]: boolean } = {
    perfil: false,
    pedidos: false
  };

  constructor() {}

  toggleDropdown(menu: string) {
    this.dropdowns[menu] = !this.dropdowns[menu];
    // Cierra los demás menús desplegables
    Object.keys(this.dropdowns).forEach(key => {
      if (key !== menu) {
        this.dropdowns[key] = false;
      }
    });
  }
}
