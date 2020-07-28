import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import APILogin from './APILogin.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  account: String;
  token: String;

  constructor(private httpClient: HttpClient) {
    this.account = APILogin.account;
    this.token = APILogin.token;
  }

  public getCountryInfo(country: String){
    return this.httpClient.get(//'https://www.triposo.com/api/20200405/location.json?'
      // + 'type=country'
      // + '&annotate=trigram:' + country
      // + '&count=1'
      // + '&fields=id,name,score,snippet'
      //+ 'type=country&count=1&fields=id,name,snippet,score&annotate=trigram:United_States'
      // + '&account=' + this.account
      // + '&token=' + this.token
      'https://www.triposo.com/api/20200405/location.json?type=country&count=1&fields=id,name,snippet,score&annotate=trigram:United_States'
    );
  }


}
