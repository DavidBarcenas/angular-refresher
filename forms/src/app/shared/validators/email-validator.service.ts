import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmailValidatorService implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors> | Observable<ValidationErrors> {
    const email = control.value;
    console.log(email);
    return this.http.get('http://localhost:3000/usuarios?q=' + email).pipe(
      map((resp: any[]) => {
        return resp.length === 0 ? null : { emailInUse: true };
      })
    );
  }
}
