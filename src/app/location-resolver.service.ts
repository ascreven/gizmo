import { Injectable }             from '@angular/core';
import { Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take, catchError } from 'rxjs/operators';

import { CountryService }  from './countries/country.service';

@Injectable({
  providedIn: 'root',
})
export class LocationResolverService implements Resolve<any> {

  constructor(
    private countryService: CountryService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let id = route.paramMap.get('id');

    return this.countryService.getCountry(id).pipe(
      catchError( () => {
        return of('data not available at this time');
      })
    );
  }
}
