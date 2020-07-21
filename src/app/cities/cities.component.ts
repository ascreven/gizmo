import { Component, OnInit } from '@angular/core';

import { City } from './city';
import { CityService } from './city.service';
import { CityPathPipe } from './city-path.pipe';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities: City[];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
    this.cityService.getCities()
    .subscribe(cities => this.cities = cities);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.cityService.addCity({ name } as City)
      .subscribe(city => {
        this.cities.push(city);
      });
  }

  delete(city: City): void {
    this.cities = this.cities.filter(h => h !== city);
    this.cityService.deleteCity(city).subscribe();
  }

}
