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

  searchCountry(q: string): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(environment.apiURL + '/name/' + q);
  }
}
