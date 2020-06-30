import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Country }         from '../country';
import { CountryService }  from '../country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: [ './country-detail.component.scss' ]
})
export class CountryDetailComponent implements OnInit {
  @Input() country: Country;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.countryService.getCountry(id)
      .subscribe(country => this.country = country);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.countryService.updateCountry(this.country)
      .subscribe(() => this.goBack());
  }
}
