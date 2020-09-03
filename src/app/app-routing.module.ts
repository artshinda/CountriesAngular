import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailCountryComponent } from './pages/detail-country/detail-country.component';
import { HomeCountryComponent } from './pages/home-country/home-country.component';
import { ListCountryComponent } from './pages/list-country/list-country.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch:"full" },
  { path: "home", component: HomeCountryComponent },
  { path: "detail" , component: DetailCountryComponent },
  { path: "Countries" , component: ListCountryComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
