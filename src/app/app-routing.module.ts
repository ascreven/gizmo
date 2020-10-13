import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CitiesComponent } from './cities/cities.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CityDetailComponent }  from './cities/city-detail/city-detail.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent }  from './countries/country-detail/country-detail.component';
import { CountryListComponent }  from './countries/country-list/country-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'cities', component: CitiesComponent },
  // { path: 'detail/:country', component: CountryDetailComponent },
  { path: 'countries', component: CountriesComponent, children: [
    { path: '', component: CountryListComponent },
    { path: ':id', children: [
      { path: '', component: CountryDetailComponent },
      { path: ':cityId', component: CityDetailComponent }
    ] }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
