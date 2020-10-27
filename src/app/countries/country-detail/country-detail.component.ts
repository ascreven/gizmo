import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import { Country }         from '../country';
import { CountryService }  from '../country.service';
// import { ApiService }         from '../../api.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: [ './country-detail.component.scss' ]
})
export class CountryDetailComponent implements OnInit {
  country: any;
  cities: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
//     private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    const countryId = this.route.snapshot.paramMap.get('id');
    this.getCountry();
    this.getTopCities(countryId);
  }

  getCountry(): void {
    this.route.data.subscribe((data: { country: any }) => {
      this.country = data.country.results[0];
    });
  }

  getTopCities(countryId: any): void {
    this.countryService.getCitiesByCountry(countryId)
    .subscribe((response) => {
        this.cities = response.results;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
