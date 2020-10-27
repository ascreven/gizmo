import { Component, OnInit } from '@angular/core';
import { CountryService }     from '../../countries/country.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.sass']
})
export class CityDetailComponent implements OnInit {
  city: any;
  country: any;
  map: String;
  embedMap: String;

  constructor(
    private route: ActivatedRoute,
    private locationService: CountryService,
    private location: Location
  ) { }

  ngOnInit() {
    const cityId = this.route.snapshot.paramMap.get('cityId');
    this.getCity(cityId);

    this.getCountryInfo();

    // this.getCityMap();
  }

  getCity(cityId: any): void {
    this.locationService.getCountry(cityId, "city")
    .subscribe((response) => {
        this.city = response.results[0];
        console.log(this.city);
    });
  }

  getCityMap(): void {
    var latitude: string = this.city.coordinates.latitude;
    var longitude: string = this.city.coordinates.longitude;
    this.map = "https://www.google.com/maps/@" + latitude + "," + longitude + ",13z";
    this.embedMap = "https://maps.google.com/maps?q=" + latitude + "%2C" + longitude + "&t=&z=11&ie=UTF8&iwloc=&output=embed";
  }

  getCountryInfo() {
    this.route.data.subscribe((data: { country: any }) => {
      this.country = data.country.results[0];
    });
  }

  goBack(): void {
    this.location.back();
  }

}
