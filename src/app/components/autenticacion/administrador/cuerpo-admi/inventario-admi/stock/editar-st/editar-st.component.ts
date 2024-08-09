import { Component } from '@angular/core';
import { CabeceraAdmiComponent } from "../../../../cabecera-admi/cabecera-admi.component";
import { PieAdmiComponent } from "../../../../pie-admi/pie-admi.component";
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Proveedor } from '../../../../../../../Interfaces/Proveedor';
import { ProveedorService } from '../../../../../../../services/proveedor.service';
import { Stock } from '../../../../../../../Interfaces/Stock';
import { StockService } from '../../../../../../../services/stock.service';

@Component({
  selector: 'app-editar-st',
  standalone: true,
  imports: [CabeceraAdmiComponent,
    PieAdmiComponent,FormsModule,
    ReactiveFormsModule, RouterModule,
    CommonModule ],
  templateUrl: './editar-st.component.html',
  styleUrl: './editar-st.component.css'
})
export class EditarStComponent {
  form: FormGroup;
  id: number;
  producto!: string;
  listaProveedor!: Proveedor[];

  constructor(
    private stockService: StockService,
    private proveedorService: ProveedorService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private fb: FormBuilder) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    this.form = this.fb.group({
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
    this.obtenerStock();
  }
  

  obtenerStock(){
    this.stockService.obtenerStock(this.id).subscribe({
      next: data => {
        console.log(data);
        this.form.patchValue({
          stockcant: data.stockcant,
          producto: data.producto,
          descripcion: data.descripcion,
          marca: data.marca,
          precio: data.precio,
          proveedor: data.proveedorId,
        })
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de productos completa');
      }
    });
  }

  modificarStock(){
    const stock: Stock = {
      id: this.id,
      stockcant: this.form.value.stockcant,
      producto: this.form.value.producto,
      descripcion: this.form.value.descripcion,
      marca: this.form.value.marca,
      precio: this.form.value.precio,
      proveedorId: this.form.value.proveedor
    }
    this.stockService.modificarStock(stock).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Modificacion de productos completa');
      }
    });
    this.form.reset();
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



}
