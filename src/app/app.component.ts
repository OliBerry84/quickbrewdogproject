import { Beers } from './classes/beers';
import { BrewdogApiService } from './services/brewdogapi.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
