import { Component } from '@angular/core';
import { CabeceraAdmiComponent } from "../../../cabecera-admi/cabecera-admi.component";
import { PieAdmiComponent } from "../../../pie-admi/pie-admi.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Stock } from '../../../../../../Interfaces/Stock';
import { StockService } from '../../../../../../services/stock.service';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [CabeceraAdmiComponent, PieAdmiComponent, CommonModule, FormsModule, RouterLink, RouterOutlet ],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {

  id!:number;
  stocks: Stock[] = [];
    listaStocks: Stock[] = [];
    searchTerm: string = '';
    currentPage: number = 1;
    itemsPerPage: number = 5;
    searchTermProducto: string = '';
    searchTermMarca: string = '';
    searchTermPrecio: string = '';
    

    constructor(private stockService: StockService) { }

    ngOnInit(): void {
      this.obtenerStocks();
    }

    obtenerStocks(): void {
      this.stockService.obtenerStocks().subscribe({
        next: (data) => {
          this.stocks = data;
          this.filtrarStocks();
        },
        error: (error) => console.error('Error al obtener los productos:', error)
      });
    }

    filtrarStocks(): void {
        this.listaStocks = this.stocks.filter(stock =>
          stock.producto.toLowerCase().includes(this.searchTermProducto.toLowerCase()) &&
          stock.marca.toLowerCase().includes(this.searchTermMarca.toLowerCase()) &&
          stock.precio.toLowerCase().includes(this.searchTermPrecio.toLowerCase()) &&
          (this.searchTerm === '' ||
            stock.producto.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            stock.marca.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
            stock.precio.toLowerCase().includes(this.searchTerm.toLowerCase()))
        );
      this.currentPage = 1;
    }
    

    eliminarStock(id?: number ){

      if (id === undefined) {
        alert('El ID del producto es indefinido');
        return;
      }
      this.stockService.eliminarStock(id).subscribe({
        next: data => {
          console.log('Producto eliminado:', data);
          this.obtenerStocks();
        },
        error: error => {
          alert("Ocurrió un error");
        },
        complete: () => {
          console.info('Eliminacion de producto completa');
        }
      });
    }


    limpiarFiltro(): void {
      this.searchTerm = '';
      this.searchTermProducto = '';
      this.searchTermMarca = '';
      this.searchTermPrecio = '';
      this.filtrarStocks();
    }
    
    changePage(page: number): void {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
    }

    get totalPages(): number {
        return Math.ceil(this.listaStocks.length / this.itemsPerPage);
    }

    get pages(): number[] {
        const pagesCount = this.totalPages;
        return Array.from({ length: pagesCount }, (_, index) => index + 1);
    }

}
