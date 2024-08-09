import { Component } from '@angular/core';
import { CabeceraAdmiComponent } from "./cabecera-admi/cabecera-admi.component";
import { CuerpoAdmiComponent } from "./cuerpo-admi/cuerpo-admi.component";
import { PieAdmiComponent } from "./pie-admi/pie-admi.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-administrador',
    standalone: true,
    templateUrl: './administrador.component.html',
    styleUrl: './administrador.component.css',
    imports: [CabeceraAdmiComponent, RouterOutlet, CuerpoAdmiComponent, PieAdmiComponent]
})
export class AdministradorComponent {
   
}
