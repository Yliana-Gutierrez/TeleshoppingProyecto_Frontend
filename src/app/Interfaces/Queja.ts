export interface Queja {
queja: any;
    nombreCliente: any;
    id?: number; // El campo id es opcional ya que es generado por el servidor
    nombre: string;
    apellido: string;
    email: string;
    ciudad: string;
    codigoPostal: string;
    pais: string;
    fechaPedido: Date;
    fechaEntrega: Date;
    detallesIncidente: string;
    fecha: Date;
    estado: string; // Ej: "En Proceso", "Resuelta", "Rechazada"
  }
  