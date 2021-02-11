import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IGif, IGIFResponse } from '../interfaces/gifResponse.interface';

@Injectable()
export class GifsService {
  private _history: string[] = [];
  results: IGif[] = [];

  constructor(private http: HttpClient) {}

  get history(): string[] {
    return [...this._history];
  }

  searchGifs(query: string): void {
    query = query.trim().toLowerCase();
    this.http
      .get<IGIFResponse>(environment.api + environment.endpoint_search, {
        params: { api_key: environment.apiKey, q: query, limit: '20' },
      })
      .subscribe((resp) => {
        this.results = resp.data;
      });
    if (!this._history.includes(query)) {
      this._history = [query, ...this._history.splice(0, 9)];
    }
  }
}
