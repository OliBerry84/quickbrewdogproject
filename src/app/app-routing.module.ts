import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BeerlistComponent } from './beerlist/beerlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'beerlist', component: BeerlistComponent },
  { path: 'homepage', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
