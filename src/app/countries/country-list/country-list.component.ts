import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.sass']
})
export class CountryListComponent implements OnInit {
  countries: any[] = [];
  @Input() countryCount: number = 20

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getTopCountries(this.countryCount)
    .subscribe((response: any) => {
      this.countries = response.results;
    });
  }

}
