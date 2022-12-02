import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../beer-list/Beer';
import { BeersCartService } from '../beers-cart.service';

@Component({
  selector: 'app-brewery-cart',
  templateUrl: './brewery-cart.component.html',
  styleUrls: ['./brewery-cart.component.scss']
})
export class BreweryCartComponent implements OnInit {

  cartList!: Observable<Beer[]>;

  constructor(private cart: BeersCartService) {
    this.cartList = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }
  
//55312
}
