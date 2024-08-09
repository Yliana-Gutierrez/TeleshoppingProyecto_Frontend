import { Component } from '@angular/core';
import { CuerpoComponent } from "./cuerpo/cuerpo.component";
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { PieComponent } from "./pie/pie.component";


@Component({
    selector: 'app-general',
    standalone: true,
    templateUrl: './general.component.html',
    styleUrl: './general.component.css',
    imports: [CuerpoComponent, RouterOutlet, CabeceraComponent, PieComponent]
})
export class GeneralComponent {

}
