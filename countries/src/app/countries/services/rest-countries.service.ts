import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICountry } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class RestCountriesService {
  constructor(private http: HttpClient) {}

  searchCountries(resource: SearchType, q: string): Observable<ICountry[]> {
    const params = new HttpParams().set(
      'fields',
      'name;capital;alpha2Code;flag;population;numericCode'
    );
    return this.http.get<ICountry[]>(`${environment.apiURL}/${resource}/${q}`, {
      params,
    });
  }

  getCountry(code: string): Observable<ICountry> {
    return this.http.get<ICountry>(
      `${environment.apiURL}${environment.resource_code}/${code}`
    );
  }
}

export enum SearchType {
  country = 'name',
  capital = 'capital',
  region = 'region',
}
