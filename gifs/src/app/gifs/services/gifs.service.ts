import { Injectable } from '@angular/core';

@Injectable()
export class GifsService {
  private _history: string[] = [];

  get history(): string[] {
    return [...this._history];
  }

  searchGifs(query: string): void {
    query = query.trim().toLowerCase();
    if (!this._history.includes(query)) {
      this._history = [query, ...this._history.splice(0, 9)];
    }
  }
}
