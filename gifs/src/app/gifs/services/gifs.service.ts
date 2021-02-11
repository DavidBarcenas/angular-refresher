import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IGif, IGIFResponse } from '../interfaces/gifResponse.interface';

@Injectable()
export class GifsService {
  private _history: string[] = [];
  results: IGif[] = [];

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')) || [];
    this.results = JSON.parse(localStorage.getItem('latestResults')) || [];
  }

  get history(): string[] {
    return [...this._history];
  }

  searchGifs(query: string): void {
    query = query.trim().toLowerCase();
    const url = environment.api + environment.endpoint_search;
    const params = new HttpParams().set('q', query);

    if (!this._history.includes(query)) {
      this._history = [query, ...this._history.splice(0, 9)];
      localStorage.setItem('history', JSON.stringify(this._history));
    }

    this.http
      .get<IGIFResponse>(url, { params })
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('latestResults', JSON.stringify(resp.data));
      });
  }
}
