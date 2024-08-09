export interface Pago {
  id?: number;
  identificacion: string;
  cliente: string;
  direccion: string;
  telefono: string;
  tipo: string;
  detalles: string;
  estado: string;
  numTarjeta?: string;
  expiracion?: string;
  codigoSeguridad?: string;

}
  

