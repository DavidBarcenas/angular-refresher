import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

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

  getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${this.baseUrl}/region/${region}?fields=alpha3Code;name`
    );
  }
}
