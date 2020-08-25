import { Component, OnInit } from '@angular/core';
import { City } from '../cities/city';
import { CityService } from '../cities/city.service';
import { Country } from '../countries/country';
import { CountryService } from '../countries/country.service';
import { PathService } from '../../shared/path.service';
import { CityPathPipe } from '../cities/city-path.pipe';
import { CountryPathPipe } from '../countries/country-path.pipe';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  // cities: City[] = [];
  countries: any[] = [];
  // countries: Country[] = [];

  constructor(
    private cityService: CityService,
    private countryService: CountryService,
    private apiService: ApiService
    ) { }

  ngOnInit() {
    // this.getCities();
    this.getCountries();
  }

  // getCities(): void {
  //   this.cityService.getCities()
  //     .subscribe(cities => this.cities = cities.slice(1, 5));
  // }

  getCountries(): void {
    this.countries = this.apiService.getTopCountries()
      // .subscribe(countries => this.countries = countries.slice(1, 5));
  }

}
