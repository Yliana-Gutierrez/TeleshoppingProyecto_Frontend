export class Cliente {
    identificacion: string = '';
    nombres: string = '';
    apellidos: string = '';
    direccion: string = '';
    telefonos: string = '';
    tipo: string = '';
    detalles: string = '';
    estado: string = 'Pendiente';
  
    constructor(identificacion: string, nombres: string, apellidos: string, direccion: string, telefonos: string, tipo: string, detalles: string, estado: string = 'Pendiente') {
      this.identificacion = identificacion;
      this.nombres = nombres;
      this.apellidos = apellidos;
      this.direccion = direccion;
      this.telefonos = telefonos;
      this.tipo = tipo;
      this.detalles = detalles;
      this.estado = estado;
    }
  }
  