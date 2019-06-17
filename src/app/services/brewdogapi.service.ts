import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BrewdogApiService {
    constructor(private httpclient: HttpClient) { }

    getbeers(): Observable<any> {
        return this.httpclient.get('https://api.punkapi.com/v2/beers');
    }
}