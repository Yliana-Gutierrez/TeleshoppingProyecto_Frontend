export class Entrega {
  ordenCompra: string;
  estado: boolean;
  unidadesDisponibles: string;
  Destinatario: string;
  Descripcion: string;


  constructor(ordenCompra: string, estado: boolean, unidadesDisponibles: string, Destinatario: string, Descripcion: string) {
    this.ordenCompra = ordenCompra;
    this.estado = estado;
    this.unidadesDisponibles = unidadesDisponibles;
    this.Destinatario = Destinatario;
    this.Descripcion = Descripcion;
  }
}
