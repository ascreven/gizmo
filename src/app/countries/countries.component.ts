import { Component, OnInit } from '@angular/core';

// import { Country } from './country';
import { CountryService } from './country.service';
// import { CountryPathPipe } from './country-path.pipe';
import { ApiService }         from '../api.service';

import * as _ from "lodash";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries: any[];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  // getCountries(): void {
  //   this.countryService.getCountries()
  //   .subscribe(countries => {
  //     this.countries = _.uniqBy(countries, 'country');
  //   });
  // }

  getCountries(): void {
    this.countries = this.countryService.getTopCountries(20);
  }

}
