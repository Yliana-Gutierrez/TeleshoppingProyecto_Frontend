import { Usuario } from "./Usuario";
import { TipoTransporte } from "./TipoTransporte";

export interface Entrega {
    id?: number;
    usuarioId: number;
    usuario?: Usuario;
    ordenCompra: String;
    estado: number;
    descripcion: String;
    nombreEmpresaTransporte: string;
    fechaEnvio: Date;
    numSeguimiento: number;
    tipoTransporteId: number;
    tipoTransporte?: TipoTransporte;
    fechaEntrega: Date;
    direccionEntrega: String;
  }
  