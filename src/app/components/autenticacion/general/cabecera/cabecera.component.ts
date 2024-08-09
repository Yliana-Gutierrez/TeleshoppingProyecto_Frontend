import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
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
