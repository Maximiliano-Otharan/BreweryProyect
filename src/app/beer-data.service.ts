import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Beer } from './beer-list/Beer';

const urlBeers = 'https://6388f38cd94a7e5040ab47ac.mockapi.io/Beers';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Beer[]> {
    //consumir la api rest
    //Fetch('url', {method: 'GET'})
    return this.http.get<Beer[]>(urlBeers)
    .pipe(
      tap( (beers: Beer[]) => beers.forEach(beer => beer.Cantidad = 0) )
    );
  }

  public updateBeer(id: number, beer: Beer) {
    return this.http.put(urlBeers + "/" + id, beer);
  }
}
