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
  url = "https://www.triposo.com/api/20200803/location.json?";

  public getTopCountries(num: number = 10, type: string = "country") {
    const call = this.url + "type=" + type + "&order_by=-score&count=" + num + "&account=" + this.account + "&token=" + this.token;

    return this.http.get(call).pipe(
      catchError(this.handleError)
    );
  }

  public getCountry(locationId: string, type: string = "country"): Observable<any> {
    var fields = "&fields=id,name,score,snippet,images";
    if (type == "city") {
      fields += ",properties,country_id,coordinates";
    }
    const call = this.url + "id=" + locationId + "&type=" + type + fields + "&account=" + this.account + "&token=" + this.token;

    return this.http.get(call).pipe(
      catchError(this.handleError)
    );
  }

  public getCitiesByCountry(countryId: string, count: number = 10): Observable<any> {
    const call = this.url + "part_of=" + countryId + "&type=city&order_by=-score&count=" + count + "&fields=id,name,score&account=" + this.account + "&token=" + this.token;
    return this.http.get(call).pipe(
      catchError(this.handleError)
    );
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
      `body was: ${error.error}, ` +
      `API call was: ${error.url}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

}
