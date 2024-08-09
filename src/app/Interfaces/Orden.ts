import { Compra } from "./Compra";

export interface Orden {
  id?: number;                
  codigo: string;
  cliente: string;
  fecha: string;
  producto: string;
  productos: Compra[];      
  total: string;
  estado: string;
 
}
