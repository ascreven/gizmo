import { Injectable } from '@angular/core';
import { CITIES } from '../data/city.mock';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }

  public getCitiesByCountry(id:String) {
    return CITIES;
  }
}
