import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Countries } from '../interfaces/countries.interface';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl: string = 'https://restcountries.eu/rest/v2';
  private _regions: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  get regions(): string[] {
    return [...this._regions];
  }

  constructor(private http: HttpClient) {}

  getCountriesByRegion(region: string): Observable<Countries[]> {
    return this.http.get<Countries[]>(
      `${this.baseUrl}/region/${region}?fields=alpha3Code;name`
    );
  }

  getCountry(code: string): Observable<Country | null> {
    if (!code) {
      return of(null);
    }
    return this.http.get<Country>(`${this.baseUrl}/alpha/${code}`);
  }
}
