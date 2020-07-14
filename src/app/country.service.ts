import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Country } from './country';
import { City } from './city';
import { MessageService } from './message.service';
import { CityService } from './city.service';
import { PathService } from './path.service';
import * as _ from "lodash";

@Injectable({ providedIn: 'root' })
export class CountryService {

  countries: Country[];
  private countriesUrl = 'api/cities';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private pathService: PathService) { }


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

  /** GET country by name. Will 404 if id not found */
  getCountry(country: string): Observable<Country> {
    const url = `${this.countriesUrl}/?country=${this.pathService.getWordsFromPath(country)}`;
    return this.http.get<Country>(url).pipe(
      map(x => {
        if (Object.keys(x).length) { // _ is array of cities in that country
          return x[0];
        }
      }),
      tap(_ => this.log(`fetched country country=${country}`)),
      catchError(this.handleError<Country>(`getCountry country=${country}`))
    );
  }

  /** GET country by id. Will 404 if id not found */
  getCountryById(id: number): Observable<Country> {
    const url = `${this.countriesUrl}/${id}`;
    return this.http.get<Country>(url).pipe(
      tap(_ => this.log(`fetched country id=${id}`)),
      catchError(this.handleError<Country>(`getCountry id=${id}`))
    );
  }

  /** GET cities by country name. Will 404 if id not found */
  getCitiesInCountry(country: string): Observable<City[]> {
    const url = `${this.countriesUrl}/?country=${this.pathService.getWordsFromPath(country)}`;
    return this.http.get<City[]>(url).pipe(
      tap(_ => this.log(`fetched cities in country=${country}`)),
      catchError(this.handleError<City[]>(`getCitiesInCountry country=${country}`))
    );
  }

  /* GET (unique) countries whose name contains search term */
  searchCountries(term: string): Observable<Country[]> {
    if (!term.trim()) {
      // if not search term, return empty city array.
      return of([]);
    }
    return this.http.get<Country[]>(`${this.countriesUrl}/?country=${term}`).pipe(
      map(x =>
        _.uniqBy(x, 'country')),
      tap(x => x.length ?
         this.log(`found countries matching "${term}"`) :
         this.log(`no countries matching "${term}"`)),
      catchError(this.handleError<Country[]>('searchCountries', []))
    );
  }

}
