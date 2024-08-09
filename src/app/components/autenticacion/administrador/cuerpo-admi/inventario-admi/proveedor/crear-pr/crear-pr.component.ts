import { Component } from '@angular/core';
import { CabeceraAdmiComponent } from "../../../../cabecera-admi/cabecera-admi.component";
import { PieAdmiComponent } from "../../../../pie-admi/pie-admi.component";
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { RouterLink, RouterOutlet, RouterModule, Router, } from '@angular/router';
import { Proveedor } from '../../../../../../../Interfaces/Proveedor';
import { ProveedorService } from '../../../../../../../services/proveedor.service';


@Component({
  selector: 'app-crear-pr',
  standalone: true,
  imports: [CabeceraAdmiComponent,
    PieAdmiComponent, CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterLink, RouterOutlet, RouterModule ],
  templateUrl: './crear-pr.component.html',
  styleUrl: './crear-pr.component.css'
})
export class CrearPrComponent {
  form: FormGroup;

  constructor(private proveedorService: ProveedorService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      origen: ['', Validators.required],
      contacto: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    
  }

  agregarProveedor(){
    const proveedor: Proveedor = {
      nombre: this.form.value.nombre,
      origen: this.form.value.origen,
      contacto: this.form.value.contacto,
    }
    this.proveedorService.crearProveedor(proveedor).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        alert("Ocurrió un error");
      },
      complete: () => {
        console.info('Agregar proveedor completa');
        alert("Se agrego correctamente");
      }
    });
    this.form.reset();
   
  }





}
