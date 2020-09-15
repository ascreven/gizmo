import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor() { }

  // converts string with spaces to a url-friendly version with underscores.
  getUrlPath(multiword: string): string {
    return multiword.replace(/ /g, "_");
  }

  // converts url-friendly string to have spaces instead of underscores.
  getWordsFromPath(multiword: string): string {
    return multiword.replace(/_/g, " ");
  }

}
