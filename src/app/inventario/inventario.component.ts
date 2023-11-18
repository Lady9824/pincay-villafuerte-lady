import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { InventarioService } from '../inventario.service';
import { Producto } from '../producto.model';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})

export class InventarioComponent implements OnInit {
  formulario: FormGroup = new FormGroup({});

  constructor(public inventarioService: InventarioService, private fb: FormBuilder){

  }
  ngOnInit() {
    this.formulario = this.fb.group({
      codigo: [''],
      nombre: [''],
      tipo: [''],
      precio: [''],
      cantidad: [''],
    });
    this.inventarioService = new InventarioService();
  }

  agregarProducto() {
    const producto = this.formulario.value;
    console.log('Producto agregado:', producto);
    this.inventarioService.agregarProducto(producto);
  }

  quitarProducto(index: number) {
    this.inventarioService.quitarProducto(index);
  }

  calcularValorTotal(): number {
    return this.inventarioService.productos.reduce((total: number, producto:Producto) => {
      return total + (producto.precio * producto.cantidad);
    }, 0);
  }
}
