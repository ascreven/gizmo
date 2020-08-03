import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../cities/city';

@Pipe({
  name: 'countryPath'
})
export class CountryPathPipe implements PipeTransform {

  transform(country: City): string {
     return "/detail/" + country.country.replace(/ /g, "_");
  }

}