import { Component } from '@angular/core';
import { CabeceraAdmiComponent } from "../../../../cabecera-admi/cabecera-admi.component";
import { PieAdmiComponent } from "../../../../pie-admi/pie-admi.component";
import { ProveedorService } from '../../../../../../../services/proveedor.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ver-pr',
  standalone: true,
  imports: [CabeceraAdmiComponent, PieAdmiComponent, RouterModule],
  templateUrl: './ver-pr.component.html',
  styleUrl: './ver-pr.component.css'
})
export class VerPrComponent {
  id: number;
  nombre!: string;
  stock!: string;
  origen!: string;
  contacto!: string;

  constructor(
    private proveedorService: ProveedorService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.obtenerProveedor();
  }
  obtenerProveedor(){
    this.proveedorService.obtenerProveedor(this.id).subscribe({
      next: data => {
        console.log(data);
        this.nombre= data.nombre;
        this.origen= data.origen;
        this.contacto= data.contacto;
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de proveedores completa');
      }
    });
  }

}
