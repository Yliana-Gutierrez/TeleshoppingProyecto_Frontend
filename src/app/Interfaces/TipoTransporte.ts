import { Empresatransporte } from "./EmpresaTransporte";

export interface TipoTransporte {
    
    id?: number;
    empresaTransporteId: number;
    empresaTransporte?: Empresatransporte;
    tipoTransporte: String;
    estado: number;
}