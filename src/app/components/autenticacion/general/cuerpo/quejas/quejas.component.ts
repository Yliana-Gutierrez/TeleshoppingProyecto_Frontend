import { Component, OnInit } from '@angular/core';
import { CabeceraComponent } from "../../cabecera/cabecera.component";
import { PieComponent } from "../../pie/pie.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { QuejaService } from '../../../../../services/queja.service';
import { Queja } from '../../../../../Interfaces/Queja';

function validarCodigoPostal(control: AbstractControl): ValidationErrors | null {
  const valor = control.value;
  const codigoPostalValido = /^[0-9]{5}$/;

  if (!codigoPostalValido.test(valor)) {
    return { 'codigoPostalInvalido': true };
  }

  return null;
}

@Component({
  selector: 'app-quejas',
  standalone: true,
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.css'],
  imports: [CabeceraComponent, PieComponent, CommonModule, FormsModule, ReactiveFormsModule],
})
export class QuejasComponent implements OnInit {
  countries: string[] = [
    "Argentina", "Bolivia", "Chile", "Colombia", "Ecuador", 
    "Perú", "Uruguay", "Venezuela", "Estados Unidos", 
    "Canadá", "México", "España", "Francia", "Italia", 
    "Alemania", "Reino Unido", "China", "Japón", "India"
  ];

  form: FormGroup = new FormGroup({});
  mensaje: string = '';

  constructor(private fb: FormBuilder, private quejaService: QuejaService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      postalCode: ['', [Validators.required, validarCodigoPostal]],
      country: ['', Validators.required],
      orderDate: ['', Validators.required],
      deliveryDate: ['', Validators.required],
      incidentDetails: ['', Validators.required],
      termsAndConditions: [false, Validators.requiredTrue]
    });
  }

  submitForm() {
    if (this.form.valid) {
      const queja: Queja = {
        nombreCliente: this.form.value.firstName + ' ' + this.form.value.lastName,
        email: this.form.value.email,
        ciudad: this.form.value.city,
        codigoPostal: this.form.value.postalCode,
        pais: this.form.value.country,
        fechaPedido: this.form.value.orderDate,
        fechaEntrega: this.form.value.deliveryDate,
        detallesIncidente: this.form.value.incidentDetails,
        queja: undefined,
        nombre: '',
        apellido: '',
        fecha: new Date(),
        estado: ''
      };
      
      this.quejaService.registrarQueja(queja).subscribe(
        () => {
          this.mensaje = 'Queja enviada exitosamente.';
          this.resetForm();
        },
        (error) => {
          this.mensaje = 'Error al enviar la queja.';
          console.error('Error al enviar la queja', error);
        }
      );
    } else {
      this.mensaje = 'Formulario inválido. Verifique los campos.';
    }
  }

  resetForm() {
    this.form.reset();
  }

  cancelForm() {
    this.resetForm();
  }
}