import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { City }         from '../city';
import { CityService }  from '../city.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: [ './city-detail.component.scss' ]
})
export class CityDetailComponent implements OnInit {
  @Input() city: City;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCity();
  }

  getCity(): void {
    const name = this.route.snapshot.paramMap.get('name');
    const dbCity = name.replace("_", " ");
    const country = this.route.snapshot.paramMap.get('country');
    const dbCountry = country.replace("_", " ");
    this.cityService.getCity(dbCity, dbCountry)
      .subscribe(city => this.city = city);
      // city returns an array, should only have one entry
  }

  getCityById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cityService.getCityById(id)
      .subscribe(city => this.city = city);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.cityService.updateCity(this.city)
      .subscribe(() => this.goBack());
  }
}
