import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // account: environment.account;
  // token: environment.token;

  // constructor(private httpClient: HttpClient) {}
  constructor() {}

  public getTopCountries(){
    // return this.httpClient.get('https://www.triposo.com/api/20200405/location.json?'
    //   + 'type=country'
    //   + '&annotate=trigram:' + country
    //   + '&count=1'
    //   + '&fields=id,name,score,snippet'
    //   + '&account=' + this.account
    //   + '&token=' + this.token );

    // /api/20200405/location.json?tag_labels=country&order_by=-score&count=4&fields=id,name,score
    return [{"id": "United_States", "score": 9.5424143871817, "name": "United States"}, {"id": "Germany", "score": 8.67357481366435, "name": "Germany"}, {"id": "France", "score": 8.65720574946714, "name": "France"}, {"id": "Israel", "score": 8.63334118291412, "name": "Israel"}];
  }

  public getTop20Countries(){
    // /api/20200405/location.json?tag_labels=country&order_by=-score&count=20&fields=id,name,score
    return [{"id": "United_States", "score": 9.5424143871817, "name": "United States"}, {"id": "Germany", "score": 8.67357481366435, "name": "Germany"}, {"id": "France", "score": 8.65720574946714, "name": "France"}, {"id": "Israel", "score": 8.63334118291412, "name": "Israel"}, {"id": "Spain", "score": 8.52806559946045, "name": "Spain"}, {"id": "Monaco", "score": 8.48226457118915, "name": "Monaco"}, {"id": "Malta", "score": 8.33348502430047, "name": "Malta"}, {"id": "Italy", "score": 8.28091314471168, "name": "Italy"}, {"id": "People27s_Republic_of_China", "score": 8.19199858511888, "name": "China"}, {"id": "Puerto_Rico", "score": 8.15010478392595, "name": "Puerto Rico"}, {"id": "Australia", "score": 8.1359608706619, "name": "Australia"}, {"id": "Poland", "score": 8.05970664976039, "name": "Poland"}, {"id": "Singapore", "score": 8.03467042216431, "name": "Singapore"}, {"id": "Norway", "score": 7.91548788350336, "name": "Norway"}, {"id": "Greece", "score": 7.87984960834351, "name": "Greece"}, {"id": "Austria", "score": 7.87117741115698, "name": "Austria"}, {"id": "Slovenia", "score": 7.79829161859099, "name": "Slovenia"}, {"id": "Sri_Lanka", "score": 7.78522925267752, "name": "Sri Lanka"}, {"id": "Belgium", "score": 7.76727810534612, "name": "Belgium"}, {"id": "New_Zealand", "score": 7.75219134573589, "name": "New Zealand"}];
  }

  public getTopCities(){
    // /api/20200405/location.json?tag_labels=city&order_by=-score&count=4&fields=id,name,score
    return [{"id": "Paris", "score": 9.98331899412756, "name": "Paris"}, {"id": "Vienna", "score": 9.95134622821491, "name": "Vienna"}, {"id": "Berlin", "score": 9.92105695095015, "name": "Berlin"}, {"id": "Rome", "score": 9.89227642674517, "name": "Rome"}];
  }

  public getTop20Cities(){
    // /api/20200405/location.json?tag_labels=city&order_by=-score&count=20&fields=id,name,score
    return [{"id": "Paris", "score": 9.98331899412756, "name": "Paris"}, {"id": "Vienna", "score": 9.95134622821491, "name": "Vienna"}, {"id": "Berlin", "score": 9.92105695095015, "name": "Berlin"}, {"id": "Rome", "score": 9.89227642674517, "name": "Rome"}, {"id": "London", "score": 9.86485603520598, "name": "London"}, {"id": "San_Francisco", "score": 9.83866829204335, "name": "San Francisco"}, {"id": "Barcelona", "score": 9.81360300546951, "name": "Barcelona"}, {"id": "New_York_City", "score": 9.78956427041727, "name": "New York City"}, {"id": "Sharm_el-Sheikh", "score": 9.76646809024609, "name": "Sharm el-Sheikh"}, {"id": "Madrid", "score": 9.74424047479286, "name": "Madrid"}, {"id": "Venice", "score": 9.72281590450908, "name": "Venice"}, {"id": "Istanbul", "score": 9.70213607912379, "name": "Istanbul"}, {"id": "Budapest", "score": 9.68214888974057, "name": "Budapest"}, {"id": "Amsterdam", "score": 9.66280756806439, "name": "Amsterdam"}, {"id": "Prague", "score": 9.64406997729067, "name": "Prague"}, {"id": "Washington2C_D2eC2e", "score": 9.62589801721657, "name": "Washington, D.C."}, {"id": "Florence", "score": 9.60825712214607, "name": "Florence"}, {"id": "Hamburg", "score": 9.59111583471794, "name": "Hamburg"}, {"id": "Chicago", "score": 9.57444544225921, "name": "Chicago"}, {"id": "Athens", "score": 9.55821966495155, "name": "Athens"}];
  }


  public getUnitedStates(){
    // /api/20200405/location.json?tag_labels=country&order_by=-score&count=1&fields=id,name,score,snippet&annotate=trigram:United States
    return [{"id": "United_States", "score": 9.5424143871817, "name": "United States", "snippet": "One of the largest, most ethnically diverse and multicultural nations on Earth includes some of the world's most famous cities, natural parks of unspeakable beauty, and virtually everything in between.", "trigram": 1.0}];
  }

}
