import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from './beer-list/Beer';
/*Maneja la logica del carrito*/
@Injectable({
  providedIn: 'root'
})


export class BeersCartService {
  constructor() { }

  private _cartList: Beer[] = [];
  list!: Beer[];
  totalNumber!: number;
  
  cartList: BehaviorSubject<Beer[]> = new BehaviorSubject<Beer[]>([]);

  addToCart(beer: Beer) {
      let itemTotal = 0;
      let item: Beer = this._cartList.find((v1) => v1.Nombre == beer.Nombre)!;
      if(!item) {
        this._cartList.push({... beer});
        itemTotal = this.total();
      } else {
        item.Cantidad += beer.Cantidad;
        itemTotal = this.total();
      }
    this.list = this._cartList;
    this.cartList.next(this._cartList); //equivale al emit de eventos
    return this.totalNumber = itemTotal;
  }

  total(): number {
    let aux = 0;
    for (const t of this._cartList) {
      aux += t.Precio*t.Cantidad;
    }

    return this.totalNumber = aux;
  }

  returnList() {
    return this.list;
  }
}
