import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// import { Country }         from '../country';
// import { CountryService }  from '../country.service';
// import { City }         from '../../cities/city';
// import { CityPathPipe } from '../../cities/city-path.pipe';
import { ApiService }         from '../../api.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: [ './country-detail.component.scss' ]
})
export class CountryDetailComponent implements OnInit {
  // country: Country;
  // cities: City[];
  countryInfo: Object;
  topCountries: Object;

  constructor(
    // private route: ActivatedRoute,
    // private countryService: CountryService,
    // private location: Location,
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    // this.getCountry();
    // this.getCitiesInCountry();
  }

  // getCountry(): void {
  //   const country = this.route.snapshot.paramMap.get('country');
  //   // strings with spaces get converted to _ in url; change back to check db
  //   const dbCountry = country.replace("_", " ");
  //   this.countryService.getCountry(dbCountry)
  //     .subscribe(country => this.country = country);
  // }
  //
  // getCountryById(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.countryService.getCountryById(id)
  //     .subscribe(country => this.country = country);
  // }
  //
  // getCitiesInCountry(): void {
  //   const country = this.route.snapshot.paramMap.get('country');
  //   // strings with spaces get converted to %20 in url; change back to check db
  //   const dbCountry = country.replace("_", " ");
  //   this.countryService.getCitiesInCountry(dbCountry)
  //     .subscribe(cities => this.cities = cities);
  // }
  //
  // goBack(): void {
  //   this.location.back();
  // }

  //api methods
  // getCountryInfo(): void {
  //   const country = this.route.snapshot.paramMap.get('country');
  //   this.apiService.getCountryInfo(country)
  //     .subscribe(data => this.countryInfo = data);
  // }
  // getTopCountries(): void {
  //   this.apiService.getTopCountries()
  //     .subscribe(data => this.topCountries = data);
  // }
}
