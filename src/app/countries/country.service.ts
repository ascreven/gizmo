import { Injectable } from '@angular/core';

import * as _ from "lodash";
import { COUNTRIES } from '../data/country.mock';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../data/country.model';



@Injectable({ providedIn: 'root' })
export class CountryService {

  constructor(private http: HttpClient) { }

  countries = COUNTRIES;
  account = "";
  token = "";

  public getTopCountries(num: number = 10) {
    // const call = "https://www.triposo.com/api/20200803/location.json?type=country&order_by=-score&count=20&account=" + this.account + "&token=" + this.token;

    return this.countries.slice(0, num);
  }

  public getCountry(countryId: string): Observable<any> {
    const call = "https://www.triposo.com/api/20200803/location.json?id=" + countryId + "&account=" + this.account + "&token=" + this.token;
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Triposo-Account': this.account,
        'X-Triposo-Token': this.token
      })
    };

    return this.http.get(call, httpOptions).pipe(
      catchError(this.handleError)
    );

    // const index = _.findIndex(this.countries,
    //   function(country) {
    //     return country.id === countryId;
    //   }
    // );
    // return this.countries[index];
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.body.error}, ` +
      `API call was: ${error.url}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

}
