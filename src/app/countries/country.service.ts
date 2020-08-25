import { Injectable } from '@angular/core';

import * as _ from "lodash";

@Injectable({ providedIn: 'root' })
export class CountryService {

  constructor() { }

    public getTopCountries(num?: number){
      if (num === 20) {
        return [{"id": "United_States", "score": 9.5424143871817, "name": "United States", "trigram": 1.0}, {"id": "Germany", "score": 8.67357481366435, "name": "Germany", "trigram": 0.0}, {"id": "France", "score": 8.65720574946714, "name": "France", "trigram": 0.0}, {"id": "Israel", "score": 8.63334118291412, "name": "Israel", "trigram": 0.19999999999999996}, {"id": "Spain", "score": 8.52806559946045, "name": "Spain", "trigram": 0.05263200000000001}, {"id": "Monaco", "score": 8.48226457118915, "name": "Monaco", "trigram": 0.0}, {"id": "Malta", "score": 8.33348502430047, "name": "Malta", "trigram": 0.0}, {"id": "Italy", "score": 8.28091314471168, "name": "Italy", "trigram": 0.0}, {"id": "People27s_Republic_of_China", "score": 8.19199858511888, "name": "China", "trigram": 0.025000000000000022}, {"id": "Puerto_Rico", "score": 8.15010478392595, "name": "Puerto Rico", "trigram": 0.02083299999999999}];
      } else {
        return [{"id": "United_States", "score": 9.5424143871817, "name": "United States"}, {"id": "Germany", "score": 8.67357481366435, "name": "Germany"}, {"id": "France", "score": 8.65720574946714, "name": "France"}, {"id": "Israel", "score": 8.63334118291412, "name": "Israel"}];
      }
    }

}
