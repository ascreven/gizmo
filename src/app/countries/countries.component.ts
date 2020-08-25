import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

import { CountryService } from './country.service';

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

  getCountries(): void {
    this.countries = this.countryService.getTopCountries(20)
  }

}
