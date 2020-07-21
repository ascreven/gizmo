import { City } from '../cities/city';

export interface Country {
  id: string;
  cities: City[];
}
