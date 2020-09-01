import { Injectable } from '@angular/core';

import * as _ from "lodash";
import { COUNTRIES } from './country.mock';

@Injectable({ providedIn: 'root' })
export class CountryService {


  constructor() { }

  countries = COUNTRIES;

  public getTopCountries(num: number = 10) {
   return this.countries.slice(0, num);
  }

  public getCountry(countryId: string) {
    const index = _.findIndex(this.countries,
      function(country) {
        return country.id === countryId;
      }
    );
    return this.countries[index];
  }

}
