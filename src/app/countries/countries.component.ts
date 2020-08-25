import { Component, OnInit } from '@angular/core';

import { Country } from './country';
import { CountryService } from './country.service';
import { CountryPathPipe } from './country-path.pipe';

import * as _ from "lodash";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countries = this.apiService.getTopCountries()
    // .subscribe(countries => {
    //   this.countries = _.uniqBy(countries, 'country');
    // });
  }

}
