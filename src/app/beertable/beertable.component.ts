import { SorterService } from './../services/sorter.service';
import { Component, OnInit } from '@angular/core';
import { Beers } from '../classes/beers';
import { BrewdogApiService } from '../services/brewdogapi.service';

@Component({
  selector: 'app-beertable',
  templateUrl: './beertable.component.html',
  styleUrls: ['./beertable.component.css']
})
export class BeertableComponent implements OnInit {

  constructor(private _brewdogApiService: BrewdogApiService, private sorterService: SorterService) { }

  listbeers: Beers[];

  ngOnInit() {
    this._brewdogApiService.getbeers()
    .subscribe(
      data => {
        this.listbeers = data;
      }
    );
  }

  sort(prop: string) {
    this.sorterService.sort(this.listbeers, prop);
  }
}