import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BeerDataService } from '../beer-data.service';
import { BeersCartService } from '../beers-cart.service';

import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})

export class BeerListComponent implements OnInit {

maxChange(mesagge: string) {
  alert(mesagge);
}

beers: Beer[] = [];

valor!: string

@ViewChild('button') btn!: ElementRef;
btnClass!: ElementRef;
list!: any;

constructor(private cart: BeersCartService, private beersDataServices: BeerDataService, private render: Renderer2) { 
}

ngOnInit(): void {
  this.beersDataServices.getAll()
  .subscribe(data => this.beers = data);
  setTimeout(() => {
    this.btnClass = this.btn.nativeElement;
    console.log(this.btnClass);
  },1);
  
  setTimeout(() => {
    console.log(this.cart.list);
    if(this.cart.list != undefined) {
      let aux = 0;
      for (const i of this.cart.list) {
        aux += i.Precio*i.Cantidad;
      }
      this.valor = `Su total de compra es de $${aux} pesos`;
      this.render.removeClass(this.btnClass, "botonDesactive");
      this.render.addClass(this.btnClass, "botonActive");
    }
  },2)
  
}

addToCart(beer: Beer): void {
  let aux = 0;
  if(beer.Cantidad > 0){
    aux = this.cart.addToCart(beer);
    this.valor = `Su total de compra es de $${aux} pesos`;
    this.render.removeClass(this.btnClass, "botonDesactive");
    this.render.addClass(this.btnClass, "botonActive");
    beer.Stock -= beer.Cantidad;;
    this.beersDataServices.updateBeer(beer.Id, beer).subscribe();
    beer.Cantidad = 0;
  }else {
    alert("Ingrese una cantidad.")
  }
}

mouseDownEvnt() {
  this.render.removeClass(this.btnClass, "botonActive");
  this.render.addClass(this.btnClass, "botonActive-mouseDown");
}

mouseUpEvent(){
  this.render.addClass(this.btnClass, "botonActive");
  this.render.removeClass(this.btnClass, "botonActive-mouseDown");
}
}
