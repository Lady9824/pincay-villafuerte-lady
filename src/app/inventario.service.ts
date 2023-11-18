import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  productos: Producto [] = [];

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  quitarProducto(index: number) {
    this.productos.splice(index, 1);
  }
  constructor() { }
}
