import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  cities: City[] = [];
  countries: Country[] = [];

  constructor(private cityService: CityService, private countryService: CountryService) { }

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
