import { Component, OnInit } from '@angular/core';

import { CountryService } from '../countries/country.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  countries: any[] = [];
  countries20: any[] = []

  constructor(
    private countryService: CountryService,
    ) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countries = this.countryService.getTopCountries()
  }

}
