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
  selector: 'app-editar-pr',
  standalone: true,
  imports: [CabeceraAdmiComponent, PieAdmiComponent,
    FormsModule, ReactiveFormsModule, RouterModule,
    CommonModule ],
  templateUrl: './editar-pr.component.html',
  styleUrl: './editar-pr.component.css'
})
export class EditarPrComponent {
  form: FormGroup;
  id: number;
  nombre!: string;
  listaProveedor!: Proveedor[];


  constructor(
    private proveedorService: ProveedorService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private fb: FormBuilder) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      origen: ['', Validators.required],
      contacto: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.obtenerProveedor();
  }
  

  obtenerProveedor(){
    this.proveedorService.obtenerProveedor(this.id).subscribe({
      next: data => {
        console.log(data);
        this.form.patchValue({
          nombre: data.nombre,
          origen: data.origen,
          contacto: data.contacto,
        })
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Obtención de proveedores completa');
      }
    });
  }

  modificarProveedor(){
    const proveedor: Proveedor = {
      id: this.id,
      nombre: this.form.value.nombre,
      origen: this.form.value.origen,
      contacto: this.form.value.contacto,
    }
    this.proveedorService.modificarProveedor(proveedor).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Proveedor actualizado');
      }
    });
    this.form.reset();
  }



}
