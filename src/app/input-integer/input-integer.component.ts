import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Beer } from '../beer-list/Beer';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input() cantidad!: number;

  @Input() max!: number;

  @Output() cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output() maxChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  sumarCantidad(): void {
    if(this.cantidad >= 0 && this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }else if(this.cantidad == this.max) {
      this.maxChange.emit("Se alcanzo el maximo de stock");
    }
  }

  restarCantidad(): void {
    if(this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

}
