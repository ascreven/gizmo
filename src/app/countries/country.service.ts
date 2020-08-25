import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
//
// import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';

// import { Country } from './country';
// import { City } from '../cities/city';
// import { MessageService } from '../shared/message.service';
// import { CityService } from '../cities/city.service';
// import { PathService } from '../shared/path.service';
import * as _ from "lodash";

@Injectable({ providedIn: 'root' })
export class CountryService {

  // countries: Country[];
  // private countriesUrl = 'api/cities';  // URL to web api
  //
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(
    // private http: HttpClient,
    // private messageService: MessageService,
    // private pathService: PathService
  ) { }


  public getTopCountries(num?: number){
    if (num === 20) {
      return [{"id": "United_States", "score": 9.5424143871817, "name": "United States", "trigram": 1.0}, {"id": "Germany", "score": 8.67357481366435, "name": "Germany", "trigram": 0.0}, {"id": "France", "score": 8.65720574946714, "name": "France", "trigram": 0.0}, {"id": "Israel", "score": 8.63334118291412, "name": "Israel", "trigram": 0.19999999999999996}, {"id": "Spain", "score": 8.52806559946045, "name": "Spain", "trigram": 0.05263200000000001}, {"id": "Monaco", "score": 8.48226457118915, "name": "Monaco", "trigram": 0.0}, {"id": "Malta", "score": 8.33348502430047, "name": "Malta", "trigram": 0.0}, {"id": "Italy", "score": 8.28091314471168, "name": "Italy", "trigram": 0.0}, {"id": "People27s_Republic_of_China", "score": 8.19199858511888, "name": "China", "trigram": 0.025000000000000022}, {"id": "Puerto_Rico", "score": 8.15010478392595, "name": "Puerto Rico", "trigram": 0.02083299999999999}];
    } else {
      return [{"id": "United_States", "score": 9.5424143871817, "name": "United States"}, {"id": "Germany", "score": 8.67357481366435, "name": "Germany"}, {"id": "France", "score": 8.65720574946714, "name": "France"}, {"id": "Israel", "score": 8.63334118291412, "name": "Israel"}];
    }
  }



  // getCountries(): Observable<Country[]> {
  //   return this.http.get<Country[]>(this.countriesUrl)
  //     .pipe(
  //       tap(_ => this.log('fetched countries')),
  //       catchError(this.handleError<Country[]>('getCountries', []))
  //     );
  // }

  // /**
  //  * Handle Http operation that failed.
  //  * Let the app continue.
  //  * @param operation - name of the operation that failed
  //  * @param result - optional value to return as the observable result
  //  */
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  //
  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);
  //
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }
  //
  // /** Log a CountryService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add(`CountryService: ${message}`);
  // }
  //
  // /** GET country by name. Will 404 if id not found */
  // getCountry(country: string): Observable<Country> {
  //   const url = `${this.countriesUrl}/?country=${this.pathService.getWordsFromPath(country)}`;
  //   return this.http.get<Country>(url).pipe(
  //     map(x => {
  //       if (Object.keys(x).length) { // _ is array of cities in that country
  //         return x[0];
  //       }
  //     }),
  //     tap(_ => this.log(`fetched country country=${country}`)),
  //     catchError(this.handleError<Country>(`getCountry country=${country}`))
  //   );
  // }
  //
  // /** GET country by id. Will 404 if id not found */
  // getCountryById(id: number): Observable<Country> {
  //   const url = `${this.countriesUrl}/${id}`;
  //   return this.http.get<Country>(url).pipe(
  //     tap(_ => this.log(`fetched country id=${id}`)),
  //     catchError(this.handleError<Country>(`getCountry id=${id}`))
  //   );
  // }
  //
  // /** GET cities by country name. Will 404 if id not found */
  // getCitiesInCountry(country: string): Observable<City[]> {
  //   const url = `${this.countriesUrl}/?country=${this.pathService.getWordsFromPath(country)}`;
  //   return this.http.get<City[]>(url).pipe(
  //     tap(_ => this.log(`fetched cities in country=${country}`)),
  //     catchError(this.handleError<City[]>(`getCitiesInCountry country=${country}`))
  //   );
  // }
  //
  // /* GET (unique) countries whose name contains search term */
  // searchCountries(term: string): Observable<Country[]> {
  //   if (!term.trim()) {
  //     // if not search term, return empty city array.
  //     return of([]);
  //   }
  //   return this.http.get<Country[]>(`${this.countriesUrl}/?country=${term}`).pipe(
  //     map(x =>
  //       _.uniqBy(x, 'country')),
  //     tap(x => x.length ?
  //        this.log(`found countries matching "${term}"`) :
  //        this.log(`no countries matching "${term}"`)),
  //     catchError(this.handleError<Country[]>('searchCountries', []))
  //   );
  // }

}
