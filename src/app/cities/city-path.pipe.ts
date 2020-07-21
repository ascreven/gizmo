import { Pipe, PipeTransform } from '@angular/core';
import { City } from './city';

@Pipe({
  name: 'cityPath'
})
export class CityPathPipe implements PipeTransform {

  transform(city: City): string {
     return "/detail/" + city.country.replace(/ /g, "_") + "/" + city.name.replace(/ /g, "_");
  }

}
