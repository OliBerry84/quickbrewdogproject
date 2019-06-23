import { BeerlistComponent } from './beerlist/beerlist.component';
import { BeertableComponent } from './beertable/beertable.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'beerlist', component: BeerlistComponent },
  { path: 'beertable', component: BeertableComponent },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
