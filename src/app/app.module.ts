import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { FormsModule } from '@angular/forms';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { BreweryBeersComponent } from './brewery-beers/brewery-beers.component';
import { BreweryCartComponent } from './brewery-cart/brewery-cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';
import { BeerImgHomeComponent } from './beer-img-home/beer-img-home.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BreweryAboutComponent,
    BreweryBeersComponent,
    BreweryCartComponent,
    InputIntegerComponent,
    BeerImgHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
