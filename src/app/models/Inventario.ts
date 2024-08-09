export class Inventario {
    codigo: string = '';
    producto: string = '';
    descripcion: String = '';
    marca: String = '';
    precio: string = '';
    proveedor: string = '';
    stock: String = '';


    constructor(codigo: string, producto: string, descripcion: string, marca: string, precio: string, proveedor: string, stock: string) {
        this.codigo = codigo;
        this.producto = producto;
        this.descripcion = descripcion;
        this.marca = marca;
        this.precio = precio;
        this.proveedor = proveedor;
        this.stock = stock;
    }
}