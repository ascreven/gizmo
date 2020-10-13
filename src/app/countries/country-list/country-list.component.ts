import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";

import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.sass']
})
export class CountryListComponent implements OnInit {
  countries: any[];
  @Input() countryCount: number = 20

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countries = this.countryService.getTopCountries(this.countryCount);
  }

}
