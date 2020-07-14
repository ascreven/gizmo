import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CityDetailComponent }  from './city-detail/city-detail.component';
import { CitiesComponent }      from './cities/cities.component';
import { CitySearchComponent }  from './city-search/city-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent }  from './country-detail/country-detail.component';
import { CountrySearchComponent }  from './country-search/country-search.component';
import { CityPathPipe } from './city-path.pipe';
import { CountryPathPipe } from './country-path.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CitiesComponent,
    CityDetailComponent,
    MessagesComponent,
    CitySearchComponent,
    CountriesComponent,
    CountryDetailComponent,
    CountrySearchComponent,
    CityPathPipe,
    CountryPathPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
