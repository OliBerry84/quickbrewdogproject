import { BrewdogApiService } from './services/brewdogapi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpComponent } from './http/http.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BeerlistComponent } from './beerlist/beerlist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BeertableComponent } from './beertable/beertable.component';
import { SorterService } from './services/sorter.service';

@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    NavbarComponent,
    BeerlistComponent,
    HomepageComponent,
    BeertableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BrewdogApiService, SorterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
