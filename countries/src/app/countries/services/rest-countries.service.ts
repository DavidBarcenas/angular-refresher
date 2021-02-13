import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICountry } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class RestCountriesService {
  constructor(private http: HttpClient) {}

  searchCountry(country: string): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(
      environment.apiURL +
        '/name/' +
        country +
        '?fields=name;capital;alpha2Code;flag;population;numericCode'
    );
  }

  searchCapital(capital: string): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(
      environment.apiURL + '/capital/' + capital
    );
  }
  searchRegion(region: string): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(environment.apiURL + '/region/' + region);
  }
  getCountryCode(code: string): Observable<ICountry> {
    return this.http.get<ICountry>(environment.apiURL + '/alpha/' + code);
  }
}
