import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutenticacionComponent } from "./components/autenticacion/autenticacion.component";
import { RegistroComponent } from "./components/autenticacion/registro/registro.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AutenticacionComponent, RegistroComponent]
})
export class AppComponent {
  title = 'proyectoTeleshopping';
}
