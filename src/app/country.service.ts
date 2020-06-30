import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Country } from './country';
import { MessageService } from './message.service';
import { CityService } from './city.service';


@Injectable({ providedIn: 'root' })
export class CountryService {

  countries: Country[];
  private countriesUrl = 'api/cities';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  //getCountries(): Observable<Country[]> {
  //   return this.cityService.getCities().pipe(
  //     map((response) =>  {
  //           // Modify response here
  //           countryList: of(this.countries);
  //           for (let r of response) {
  //             found: false
  //             if (null != countryList) {
  //               for (let country of countryList) {
  //                 if (r.country === country.id && !found) {
  //                   country.locations.push(r);
  //                   this.found = true;
  //                 }
  //               }
  //             }
  //             if (!this.found) {
  //               newCountry: Country = { id: r.country, locations: [ r ] };
  //               countryList.push(this.newCountry);
  //             }
  //           }
  //
  //           // Return modified response
  //           return countryList;
  //       }), catchError(this.handleError<Country[]>('getCountries', []))
  //     );
  // }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl)
      .pipe(
        tap(_ => this.log('fetched countries')),
        catchError(this.handleError<Country[]>('getCountries', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CountryService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CountryService: ${message}`);
  }

  // getCountries(cities: City[]): Country[] {
  //   for (i = 0; i < cities.length; i++) {
  //     found = false;
  //     currentCountry = cities[i].country;
  //     for (j = 0; j < countries.length; j++) {
  //       if (currentCountry === countries[j].id) {
  //         countries[j].locations.push(cities[i]);
  //         found = true;
  //         j = countries.length;
  //       }
  //     }
  //     if (!found) {
  //       newCountry = { id: currentCountry, locations: [ cities[i] ] };
  //       countries.push(newCountry);
  //     }
  //   }
  //
  //   return countries;
  // }
}
