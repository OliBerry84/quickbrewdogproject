import { BrewdogApiService } from './services/brewdogapi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BrewdogApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
