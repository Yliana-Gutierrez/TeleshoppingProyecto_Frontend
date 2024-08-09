import { Component } from '@angular/core';
import { CabeceraAdmiComponent } from "../../../../cabecera-admi/cabecera-admi.component";
import { PieAdmiComponent } from "../../../../pie-admi/pie-admi.component";
import { StockService } from '../../../../../../../services/stock.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ver-st',
  standalone: true,
  imports: [CabeceraAdmiComponent, PieAdmiComponent, RouterModule ],
  templateUrl: './ver-st.component.html',
  styleUrl: './ver-st.component.css'
})
export class VerStComponent {
  id: number;
  proveedor!: string;
  stock!: string;
  nombreProducto!: string;
  descripcion!: string;
  origen!: string;
  contacto!: string;

  constructor(
    private stockService: StockService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.obtenerStock();
  }
  obtenerStock(){
    this.stockService.obtenerStock(this.id).subscribe({
      next: data => {
        console.log(data);
        this.nombreProducto= data.producto;
        this.stock= data.stockcant;
        this.descripcion= data.descripcion;
        this.proveedor= data.proveedor?.nombre || 'Proveedor desconocido';
        this.origen= data.proveedor?.origen ||'Origen desconocido';;
        this.contacto= data.proveedor?.contacto ||'Contacto desconocido';;
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de productos completa');
      }
    });
  }

}
