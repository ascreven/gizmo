import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CityDetailComponent }  from './city-detail/city-detail.component';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CityDetailComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'countries', component: CountriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
