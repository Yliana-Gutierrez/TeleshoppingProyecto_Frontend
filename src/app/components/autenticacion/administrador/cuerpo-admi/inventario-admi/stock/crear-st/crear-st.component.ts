import { Component } from '@angular/core';
import { CabeceraAdmiComponent } from "../../../../cabecera-admi/cabecera-admi.component";
import { PieAdmiComponent } from "../../../../pie-admi/pie-admi.component";
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { RouterLink, RouterOutlet, RouterModule, Router, } from '@angular/router';
import { Proveedor } from '../../../../../../../Interfaces/Proveedor';
import { ProveedorService } from '../../../../../../../services/proveedor.service';
import { Stock } from '../../../../../../../Interfaces/Stock';
import { StockService } from '../../../../../../../services/stock.service';

@Component({
  selector: 'app-crear-st',
  standalone: true,
  imports: [CabeceraAdmiComponent,
    PieAdmiComponent, CommonModule,
    FormsModule, ReactiveFormsModule,RouterLink,
    RouterOutlet, RouterModule],
  templateUrl: './crear-st.component.html',
  styleUrl: './crear-st.component.css'
})
export class CrearStComponent {
  form: FormGroup;
  listaProveedor!: Proveedor[];

  constructor(private stockService: StockService,
    private proveedorService: ProveedorService,
    private router: Router,
    private fb: FormBuilder) {
    this.form = this.fb.group(
    {
      stockcant: ['', Validators.required],
      producto: ['', Validators.required],
      descripcion: ['', Validators.required],
      marca: ['', Validators.required],
      precio: ['', Validators.required],
      proveedor: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.consultarProveedores();
  }

  consultarProveedores(){
    this.proveedorService.obtenerProveedores().subscribe({
      next: data => {
        console.log(data);
        this.listaProveedor = data;
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de proveedores completa');
      }
    });
  }

  agregarStock(){
    const stock: Stock= {
      stockcant: this.form.value.stockcant,
      producto: this.form.value.producto,
      descripcion: this.form.value.descripcion,
      marca: this.form.value.marca,
      precio: this.form.value.precio,
      proveedorId: this.form.value.proveedor,
    }
    this.stockService.crearStock(stock).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Agregar producto completa');
        alert("Se agrego correctamente");
      }
    });
    this.form.reset();
  
  }

}
