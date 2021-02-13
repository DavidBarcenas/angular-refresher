import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestCountriesService {
  constructor(private http: HttpClient) {}

  searchCountry(q: string): Observable<any> {
    return this.http.get(environment.apiURL + '/name/' + q);
  }
}
