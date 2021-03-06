import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IAuth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth: IAuth | undefined;
  get auth() {
    return { ...this._auth };
  }
  constructor(private http: HttpClient) {}

  login(): Observable<IAuth> {
    return this.http
      .get<IAuth>('http://localhost:3000/usuarios/1')
      .pipe(tap((auth) => (this._auth = auth)));
  }
}
