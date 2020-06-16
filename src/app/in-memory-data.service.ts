import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { City } from './city';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cities = [
      { id: 11, name: 'London' },
      { id: 12, name: 'Paris' },
      { id: 13, name: 'Rome' },
      { id: 14, name: 'Prague' },
      { id: 15, name: 'Berlin' },
      { id: 16, name: 'Barcelona' },
      { id: 17, name: 'Cairo' },
      { id: 18, name: 'Dubai' },
      { id: 19, name: 'Istanbul' },
      { id: 20, name: 'Cape Town' },
      { id: 21, name: 'Mumbai' },
      { id: 22, name: 'Shanghai' },
      { id: 23, name: 'Tokyo' },
      { id: 24, name: 'Seoul' },
      { id: 25, name: 'Bangkok' },
      { id: 26, name: 'Sydney' },
      { id: 27, name: 'Toronto' },
      { id: 28, name: 'Los Angeles' },
      { id: 29, name: 'New York City' },
      { id: 30, name: 'Rio de Janeiro' }
    ];
    return {cities};
  }

  // Overrides the genId method to ensure that a city always has an id.
  // If the cities array is empty,
  // the method below returns the initial number (11).
  // if the cities array is not empty, the method below returns the highest
  // city id + 1.
  genId(cities: City[]): number {
    return cities.length > 0 ? Math.max(...cities.map(city => city.id)) + 1 : 11;
  }
}
