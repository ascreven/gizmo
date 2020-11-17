import { Injectable } from '@angular/core';
import * as _ from "lodash";
import { CITIES } from '../data/city.mock';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cities = CITIES;

  constructor() { }

  public getCitiesByCountry(id:String) {
    return this.cities;
  }

  public getCity(cityId: string) {
    const index = _.findIndex(this.cities,
      function(city) {
        return city.id === cityId;
      }
    );
    return this.cities[index];
  }
}
