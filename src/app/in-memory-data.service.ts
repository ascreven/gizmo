import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { City } from './city';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cities = [
      { id: 11, name: 'London', country: 'United Kingdom' },
      { id: 12, name: 'Paris', country: 'France' },
      { id: 13, name: 'Rome', country: 'Italy' },
      { id: 14, name: 'Prague', country: 'Czech Republic' },
      { id: 15, name: 'Berlin', country: 'Germany' },
      { id: 16, name: 'Barcelona', country: 'Spain' },
      { id: 17, name: 'Cairo', country: 'Egypt' },
      { id: 18, name: 'Dubai', country: 'Saudi Arabia' },
      { id: 19, name: 'Istanbul', country: 'Turkey' },
      { id: 20, name: 'Cape Town', country: 'South Africa' },
      { id: 21, name: 'Mumbai', country: 'India' },
      { id: 22, name: 'Shanghai', country: 'China' },
      { id: 23, name: 'Tokyo', country: 'Japan' },
      { id: 24, name: 'Seoul', country: 'South Korea' },
      { id: 25, name: 'Bangkok', country: 'Thailand' },
      { id: 26, name: 'Sydney', country: 'Australia' },
      { id: 27, name: 'Toronto', country: 'Canada' },
      { id: 28, name: 'Los Angeles', country: 'United States' },
      { id: 29, name: 'New York City', country: 'United States' },
      { id: 30, name: 'Rio de Janeiro', country: 'Brazil' }
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
