import { Component, OnInit } from '@angular/core';
import { City } from '../cities/city';
import { CityService } from '../cities/city.service';
import { Country } from '../countries/country';
import { CountryService } from '../countries/country.service';
import { PathService } from '../path.service';
import { CityPathPipe } from '../cities/city-path.pipe';
import { CountryPathPipe } from '../countries/country-path.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  cities: City[] = [];
  countries: Country[] = [];

  constructor(
    private cityService: CityService,
    private countryService: CountryService) { }

  ngOnInit() {
    this.getCities();
    this.getCountries();
  }

  getCities(): void {
    this.cityService.getCities()
      .subscribe(cities => this.cities = cities.slice(1, 5));
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries.slice(1, 5));
  }

}
