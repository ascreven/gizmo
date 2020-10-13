import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import { Country }         from '../country';
import { CountryService }  from '../country.service';
import { CitiesService }     from '../../cities/cities.service';
// import { ApiService }         from '../../api.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: [ './country-detail.component.scss' ]
})
export class CountryDetailComponent implements OnInit {
  country: any;
  cities: any[];
//   countryInfo: Object;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private citiesService: CitiesService,
    private location: Location
//     private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    const countryId = this.route.snapshot.paramMap.get('id');
    this.getCountry(countryId);
    this.getTopCities(countryId);
  }

  getCountry(countryId: any): void {
    this.country = this.countryService.getCountry(countryId);
  }

  getTopCities(countryId: any): void {
    this.cities = this.citiesService.getCitiesByCountry(countryId);
    console.log(this.cities);
  }

  goBack(): void {
    this.location.back();
  }

}
