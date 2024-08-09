export class Transporte {
  
    fechaEnvio: Date;
    Num_seguimiento : string;
    NombreEmpresaTransporte : string;
    TipoTransporte: string;
    FechaEntrega: Date;
    DireccionEntrega: string;

    constructor(fechaEnvio: Date, 
        Num_seguimiento: string, 
        NombreEmpresaTransporte: string, 
        TipoTransporte: string,
        FechaEntrega: Date,
           DireccionEntrega: string)
          {
        this.fechaEnvio = fechaEnvio;
        this.Num_seguimiento = Num_seguimiento;
        this.NombreEmpresaTransporte = NombreEmpresaTransporte;
        this.TipoTransporte = TipoTransporte;
        this.FechaEntrega = FechaEntrega;
        this.DireccionEntrega = DireccionEntrega;
        }


}
         