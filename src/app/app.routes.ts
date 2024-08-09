import { Routes } from '@angular/router';
import { AutenticacionComponent } from './components/autenticacion/autenticacion.component';
import { RegistroComponent } from './components/autenticacion/registro/registro.component';
import { RecuperarContrasenaComponent } from './components/autenticacion/recuperar-contrasena/recuperar-contrasena.component';
import { AdministradorComponent } from './components/autenticacion/administrador/administrador.component';
import { GeneralComponent } from './components/autenticacion/general/general.component';
import { CatalogoComponent } from './components/autenticacion/general/cuerpo/catalogo/catalogo.component';
import { EntregasComponent } from './components/autenticacion/general/entregas/entregas.component';
import { PedidosComponent } from './components/autenticacion/general/cuerpo/pedidos/pedidos.component';
import { QuejasComponent } from './components/autenticacion/general/cuerpo/quejas/quejas.component';
import { CatalogoAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/catalogo-admi.component';
import { EntregasAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/entregas-admi/entregas-admi.component';
import { PedidosAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/pedidos-admi/pedidos-admi.component';
import { QuejasAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/quejas-admi/quejas-admi.component';
import { InventarioAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/inventario-admi/inventario-admi.component';
import { PerfilComponent } from './components/autenticacion/general/cuerpo/perfil/perfil.component';
import { PerfilAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/perfil-admi/perfil-admi.component';
import { CambiarContrasenaComponent } from './components/autenticacion/general/cuerpo/perfil/cambiar-contrasena/cambiar-contrasena.component';
import { EliminarCuentaComponent } from './components/autenticacion/general/cuerpo/perfil/eliminar-cuenta/eliminar-cuenta.component';

import { DescripcionesProductosAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/descripciones-productos-admi/descripciones-productos-admi.component';
import { ProductosFavoritosAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/productos-favoritos-admi/productos-favoritos-admi.component';
import { CelularesAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/electronica-a/celulares-admi/celulares-admi.component';
import { ComputadorasAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/electronica-a/computadoras-admi/computadoras-admi.component';
import { LaptopsAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/electronica-a/laptops-admi/laptops-admi.component';
import { TelevisoresAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/electronica-a/televisores-admi/televisores-admi.component';
import { ElectrodomesticosAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/electronica-a/electrodomesticos-admi/electrodomesticos-admi.component';
import { BolsosAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/moda-a/bolsos-admi/bolsos-admi.component';
import { CalzadoAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/moda-a/calzado-admi/calzado-admi.component';
import { CarterasAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/moda-a/carteras-admi/carteras-admi.component';
import { JoyeriaAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/moda-a/joyeria-admi/joyeria-admi.component';
import { RelojesAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/moda-a/relojes-admi/relojes-admi.component';
import { RopaDeMujerAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/moda-a/ropa-de-mujer-admi/ropa-de-mujer-admi.component';
import { RopaHComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/moda-a/ropa-h/ropa-h.component';
import { CuidadoPielCabelloAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/salud-a/cuidado-piel-cabello-admi/cuidado-piel-cabello-admi.component';
import { EquiposEjerciciosAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/salud-a/equipos-ejercicios-admi/equipos-ejercicios-admi.component';
import { MaquillajeAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/salud-a/maquillaje-admi/maquillaje-admi.component';
import { SuplementosVitaminasAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/catalogo-admi/categoria-catalogo-admi/salud-a/suplementos-vitaminas-admi/suplementos-vitaminas-admi.component';

import { DescripcionesProductosComponent } from './components/autenticacion/general/cuerpo/catalogo/descripciones-productos/descripciones-productos.component';
import { ProductosFavoritosComponent } from './components/autenticacion/general/cuerpo/catalogo/productos-favoritos/productos-favoritos.component';
import { CelularesComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/electronica/celulares/celulares.component';
import { ComputadorasComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/electronica/computadoras/computadoras.component';
import { LaptopsComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/electronica/laptops/laptops.component';
import { TelevisoresComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/electronica/televisores/televisores.component';
import { ElectrodomesticosComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/electronica/electrodomesticos/electrodomesticos.component';
import { BolsosComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/moda/bolsos/bolsos.component';
import { CalzadoComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/moda/calzado/calzado.component';
import { CarterasComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/moda/carteras/carteras.component';
import { JoyeriaComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/moda/joyeria/joyeria.component';
import { RelojesComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/moda/relojes/relojes.component';
import { RopaDeMujerComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/moda/ropa-de-mujer/ropa-de-mujer.component';
import { RopaDeHombreComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/moda/ropa-de-hombre/ropa-de-hombre.component';
import { CuidadoPielCabelloComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/salud/cuidado-piel-cabello/cuidado-piel-cabello.component';
import { EquiposEjerciciosComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/salud/equipos-ejercicios/equipos-ejercicios.component';
import { MaquillajeComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/salud/maquillaje/maquillaje.component';
import { SuplementosVitaminasComponent } from './components/autenticacion/general/cuerpo/catalogo/categoria-catalogo/salud/suplementos-vitaminas/suplementos-vitaminas.component';
import { PagoComponent } from './components/autenticacion/general/cuerpo/pedidos/pago/pago.component';
import { PagoAdmiComponent } from './components/autenticacion/administrador/cuerpo-admi/pedidos-admi/pago-admi/pago-admi.component';

import { GenerarOrdenComponent } from './components/autenticacion/general/cuerpo/pedidos/generar-orden/generar-orden.component';
import { RegistrarComponent } from './components/autenticacion/administrador/cuerpo-admi/perfil-admi/registrar/registrar.component';
import { ActualizarComponent } from './components/autenticacion/administrador/cuerpo-admi/perfil-admi/actualizar/actualizar.component';
import { EliminarComponent } from './components/autenticacion/administrador/cuerpo-admi/perfil-admi/eliminar/eliminar.component';
import { ListarComponent } from './components/autenticacion/administrador/cuerpo-admi/perfil-admi/listar/listar.component';
import { ActualizarPagoComponent } from './components/autenticacion/administrador/cuerpo-admi/pedidos-admi/actualizar-pago/actualizar-pago.component';
import { EditarEntregaComponent } from './components/autenticacion/administrador/cuerpo-admi/entregas-admi/editar-entrega/editar-entrega.component';
import { VerEntregaComponent } from './components/autenticacion/administrador/cuerpo-admi/entregas-admi/ver-entrega/ver-entrega.component';
import { AgregarEntregaComponent } from './components/autenticacion/administrador/cuerpo-admi/entregas-admi/agregar-entrega/agregar-entrega.component';
import { AgregarEmpresasTransporteComponent } from './components/autenticacion/administrador/cuerpo-admi/entregas-admi/agregar-empresas-transporte/agregar-empresas-transporte.component';
import { ProveedorComponent } from './components/autenticacion/administrador/cuerpo-admi/inventario-admi/proveedor/proveedor.component';
import { StockComponent } from './components/autenticacion/administrador/cuerpo-admi/inventario-admi/stock/stock.component';
import { CrearPrComponent } from './components/autenticacion/administrador/cuerpo-admi/inventario-admi/proveedor/crear-pr/crear-pr.component';
import { EditarPrComponent } from './components/autenticacion/administrador/cuerpo-admi/inventario-admi/proveedor/editar-pr/editar-pr.component';
import { VerPrComponent } from './components/autenticacion/administrador/cuerpo-admi/inventario-admi/proveedor/ver-pr/ver-pr.component';
import { CrearStComponent } from './components/autenticacion/administrador/cuerpo-admi/inventario-admi/stock/crear-st/crear-st.component';
import { EditarStComponent } from './components/autenticacion/administrador/cuerpo-admi/inventario-admi/stock/editar-st/editar-st.component';
import { VerStComponent } from './components/autenticacion/administrador/cuerpo-admi/inventario-admi/stock/ver-st/ver-st.component';



export const routes: Routes = [


  { path: 'administrador/cuerpo/pedidos-admi/actualizar-pago', component: ActualizarPagoComponent },

  { path: '', redirectTo: '/autenticacion', pathMatch: 'full' }, // Redirecciona al componente de autenticación por defecto
  {
    path: 'autenticacion',
    children: [
      { path: '', component: AutenticacionComponent }, // Página principal de autenticación
      { path: 'registro', component: RegistroComponent }, // Página de registro
      { path: 'recuperar-contrasena', component: RecuperarContrasenaComponent }, // Página de recuperar contraseña
      { path: 'administrador', component: AdministradorComponent }, // Página de administrador
      { path: 'administrador/cuerpo/perfil-admi', component: PerfilAdmiComponent }, // Ruta para la opción Perfil ADMI
      { path: 'administrador/cuerpo/perfil-admi/registrar', component: RegistrarComponent }, // Ruta para la opción Perfil ADMI - REGISTRAR
      { path: 'administrador/cuerpo/perfil-admi/actualizar', component: ActualizarComponent }, // Ruta para la opción Perfil ADMI - ACTUALIZAR
      { path: 'administrador/cuerpo/perfil-admi/eliminar', component: EliminarComponent }, // Ruta para la opción Perfil ADMI - ELIMINAR
      { path: 'administrador/cuerpo/perfil-admi/listar', component: ListarComponent }, // Ruta para la opción Perfil ADMI - LISTAR
      { path: 'administrador/cuerpo/catalogo-admi', component: CatalogoAdmiComponent }, // Ruta para la opción Catalogo ADMI
      { path: 'administrador/cuerpo/entregas-admi', component: EntregasAdmiComponent },  // Ruta para la opción Entregas ADMI

      {path: 'editar', component: EditarEntregaComponent},
      
      { path: 'administrador/cuerpo/pedidos-admi', component: PedidosAdmiComponent }, // Ruta para la opción Pedidos ADMI
      { path: 'administrador/cuerpo/pago-admi', component: PagoAdmiComponent}, // Ruta para la opción de Pago ADMI
      { path: 'administrador/cuerpo/pedidos-admi/actualizar-pago', component: ActualizarPagoComponent },

      { path: 'administrador/cuerpo/quejas-admi', component: QuejasAdmiComponent }, // Ruta para la opción Quejas ADMI
      { path: 'administrador/cuerpo/inventario-admi', component: InventarioAdmiComponent }, // Ruta para la opción Inventario ADMI
      { path: 'administrador/cuerpo/inventario-admi/proveedor', component: ProveedorComponent },
      { path: 'administrador/cuerpo/inventario-admi/stock', component: StockComponent },
      { path: 'administrador/cuerpo/catalogo-admi/electronica-admi/celulares-admi', component: CelularesAdmiComponent },// Ruta para la opción Catalogo de celulares ADMI
      { path: 'administrador/cuerpo/catalogo-admi/electronica-admi/computadoras-admi', component: ComputadorasAdmiComponent },// Ruta para la opción Catalogo de computadoras ADMI
      { path: 'administrador/cuerpo/catalogo-admi/electronica-admi/laptops-admi', component: LaptopsAdmiComponent },// Ruta para la opción Catalogo de Laptos ADMI
      { path: 'administrador/cuerpo/catalogo-admi/electronica-admi/televisores-admi', component: TelevisoresAdmiComponent },// Ruta para la opción Catalogo de televisores ADMI
      { path: 'administrador/cuerpo/catalogo-admi/electronica-admi/electrodomesticos-admi', component: ElectrodomesticosAdmiComponent },// Ruta para la opción Catalogo de electrodomestico ADMI
      { path: 'administrador/cuerpo/catalogo-admi/moda-y-accesorios-admi/bolsos-admi', component: BolsosAdmiComponent },// Ruta para la opción Catalogo de electrodomestico ADMI
      { path: 'administrador/cuerpo/catalogo-admi/moda-y-accesorios-admi/calzados-admi', component: CalzadoAdmiComponent },// Ruta para la opción Catalogo de calzado ADMI
      { path: 'administrador/cuerpo/catalogo-admi/moda-y-accesorios-admi/carteras-admi', component: CarterasAdmiComponent },// Ruta para la opción Catalogo de cartera ADMI
      { path: 'administrador/cuerpo/catalogo-admi/moda-y-accesorios-admi/joyeria-admi', component: JoyeriaAdmiComponent },// Ruta para la opción Catalogo de joyeria ADMI
      { path: 'administrador/cuerpo/catalogo-admi/moda-y-accesorios-admi/relojes-admi', component: RelojesAdmiComponent },// Ruta para la opción Catalogo de relojes ADMI
      { path: 'administrador/cuerpo/catalogo-admi/moda-y-accesorios-admi/ropa-de-mujer-admi', component: RopaDeMujerAdmiComponent },// Ruta para la opción Catalogo de ropa de mujer ADMI
      { path: 'administrador/cuerpo/catalogo-admi/moda-y-accesorios-admi/ropa-h', component: RopaHComponent },// Ruta para la opción Catalogo de ropa de hombre ADMI
      { path: 'administrador/cuerpo/catalogo-admi/salud-y-belleza-admi/cuidado-de-piel-cabello-admi', component: CuidadoPielCabelloAdmiComponent },// Ruta para la opción Catalogo de cuidado de piel y cabello ADMI
      { path: 'administrador/cuerpo/catalogo-admi/salud-y-belleza-admi/equipos-de-ejercicio-admi', component: EquiposEjerciciosAdmiComponent },// Ruta para la opción Catalogo de equipos de ejercicios ADMI
      { path: 'administrador/cuerpo/catalogo-admi/salud-y-belleza-admi/maquillaje-admi', component: MaquillajeAdmiComponent },// Ruta para la opción Catalogo de ropa de maquillaje ADMI
      { path: 'administrador/cuerpo/catalogo-admi/salud-y-belleza-admi/suplementos-y-vitaminas-admi', component: SuplementosVitaminasAdmiComponent },// Ruta para la opción Catalogo de suplementos y vitaminas ADMI
      { path: 'administrador/cuerpo/catalogo-admi/Producto-favoritos-admi', component: ProductosFavoritosAdmiComponent},
      { path: 'administrador/cuerpo/catalogo-admi/descripcion-admi/:id', component: DescripcionesProductosAdmiComponent},

      { path: 'general', component: GeneralComponent }, // Página general
      { path: 'general/cuerpo/perfil', component: PerfilComponent}, // Ruta para la opción Mi Perfil
      { path: 'general/cuerpo/catalogo', component: CatalogoComponent }, // Ruta para la opción Catálogo
      { path: 'general/cuerpo/entregas', component: EntregasComponent }, // Ruta para la opción Entregas
      { path: 'general/cuerpo/generarorden', component: GenerarOrdenComponent }, // Ruta para la opción de Generar Orden
      { path: 'general/cuerpo/pedidos', component: PedidosComponent }, // Ruta para la opción Pedidos
      { path: 'general/cuerpo/quejas', component: QuejasComponent }, // Ruta para la opción Quejas
      { path: 'general/cuerpo/cambiarcontrasena', component: CambiarContrasenaComponent }, // Ruta para la opción Quejas   
      { path: 'general/cuerpo/eliminarcuenta', component: EliminarCuentaComponent }, // Ruta para la opción Eliminar Cuenta  
      { path: 'general/cuerpo/pago', component: PagoComponent }, // Ruta para la opción de Pago
      { path: 'general/cuerpo/catalogo/electronica/celulares', component: CelularesComponent },// Ruta para la opción Catalogo de celulares 
      { path: 'general/cuerpo/catalogo/electronica/computadoras', component: ComputadorasComponent },// Ruta para la opción Catalogo de computadoras 
      { path: 'general/cuerpo/catalogo/electronica/laptops', component: LaptopsComponent },// Ruta para la opción Catalogo de Laptos 
      { path: 'general/cuerpo/catalogo/electronica/televisores', component: TelevisoresComponent },// Ruta para la opción Catalogo de televisores 
      { path: 'general/cuerpo/catalogo/electronica/electrodomesticos', component: ElectrodomesticosComponent },// Ruta para la opción Catalogo de electrodomestico 
      { path: 'general/cuerpo/catalogo/moda-y-accesorios/bolsos', component: BolsosComponent },// Ruta para la opción Catalogo de electrodomestico 
      { path: 'general/cuerpo/catalogo/moda-y-accesorios/calzados', component: CalzadoComponent },// Ruta para la opción Catalogo de calzado
      { path: 'general/cuerpo/catalogo/moda-y-accesorios/carteras', component: CarterasComponent },// Ruta para la opción Catalogo de cartera 
      { path: 'general/cuerpo/catalogo/moda-y-accesorios/joyeria', component: JoyeriaComponent },// Ruta para la opción Catalogo de joyeria 
      { path: 'general/cuerpo/catalogo/moda-y-accesorios/relojes', component: RelojesComponent },// Ruta para la opción Catalogo de relojes 
      { path: 'general/cuerpo/catalogo/moda-y-accesorios/ropa-de-mujer', component: RopaDeMujerComponent },// Ruta para la opción Catalogo de ropa de mujer 
      { path: 'general/cuerpo/catalogo/moda-y-accesorios/ropa-de-hombre', component: RopaDeHombreComponent },// Ruta para la opción Catalogo de ropa de hombre 
      { path: 'general/cuerpo/catalogo/salud-y-belleza/cuidado-de-piel-cabello', component: CuidadoPielCabelloComponent },// Ruta para la opción Catalogo de cuidado de piel y cabello 
      { path: 'general/cuerpo/catalogo/salud-y-belleza/equipos-de-ejercicio', component: EquiposEjerciciosComponent },// Ruta para la opción Catalogo de equipos de ejercicios 
      { path: 'general/cuerpo/catalogo/salud-y-belleza/maquillaje', component: MaquillajeComponent },// Ruta para la opción Catalogo de ropa de maquillaje 
      { path: 'general/cuerpo/catalogo/salud-y-belleza/suplementos-y-vitaminas', component: SuplementosVitaminasComponent },// Ruta para la opción Catalogo de suplementos y vitaminas
      { path: 'general/cuerpo/catalogo/Producto-favoritos', component: ProductosFavoritosComponent},
      { path: 'general/cuerpo/catalogo/descripcion/:id', component: DescripcionesProductosComponent}

    ]
  },
 
  { path: 'ver-pr/:id', component: VerPrComponent},
  { path: 'proveedor/crear-pr', component: CrearPrComponent},
  { path: 'editar-pr/:id', component: EditarPrComponent},
  { path: 'proveedor', component: ProveedorComponent},
  { path: 'ver-st/:id', component: VerStComponent},
  { path: 'stock/crear-st', component: CrearStComponent},
  { path: 'editar-st/:id', component: EditarStComponent},
  { path: 'stock', component: StockComponent},
  

  { path: 'entregas-admi/agregar-empresas-transporte', component: AgregarEmpresasTransporteComponent}, // Ruta Agregar Empresass de trasnporte disponibles en Entregas-admi 

  { path: 'pedidos-admi/actualizar-pago', component: ActualizarPagoComponent },
  { path: 'verEntrega/:id', component: VerEntregaComponent },
     
  {path: 'agregar/entrega', component: AgregarEntregaComponent},

      {path: 'agregar/empresaTransporte', component: AgregarEmpresasTransporteComponent},
     
      {path: 'editarEntrega/:id', component: EditarEntregaComponent},


  { path: '**', redirectTo: '/autenticacion' } // Redirige cualquier otra ruta a la página de autenticación

  
];
