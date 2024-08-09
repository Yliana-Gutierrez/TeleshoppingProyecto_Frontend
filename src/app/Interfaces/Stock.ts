import { Proveedor } from "./Proveedor";

export interface Stock{
    id?: number,
    stockcant: string,
    producto: string,
    descripcion: string,
    marca: string,
    precio: string,
    proveedorId: number,
    proveedor?: Proveedor
}