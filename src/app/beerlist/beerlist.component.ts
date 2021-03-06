import { Beers } from '../classes/beers';
import { BrewdogApiService } from '../services/brewdogapi.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-beerlist',
  templateUrl: './beerlist.component.html',
  styleUrls: ['./beerlist.component.css']
})
export class BeerlistComponent {

  constructor(private _brewdogApiService: BrewdogApiService) { }

  listbeers: Beers[];

  ngOnInit() {
    this._brewdogApiService.getbeers()
    .subscribe(
      data => {
        this.listbeers = data;
      }
    );
  }

}