import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})

export class HttpComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  makeRequest(): void {
    this.loading = true;
    this.http.get('https://api.punkapi.com/v2/beers').subscribe(data => {
      this.data = data;
      this.loading = false;
    });
  }

}
