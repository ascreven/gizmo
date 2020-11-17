import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: [ './country-search.component.scss' ]
})
export class CountrySearchComponent implements OnInit {
  countries$: Observable<any[]>;
  countries: any[];
  private searchTerms = new Subject<string>();

  constructor() {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    // this.countries$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),
    //
    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),
    //
    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.countryService.searchCountries(term)),
    // );
  }
}
