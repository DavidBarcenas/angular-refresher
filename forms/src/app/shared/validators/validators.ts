import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export class SharedValidators {
  static namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,4})$/;

  static validateUsername(control: FormControl): ValidationErrors {
    if (control.value?.trim().toLowerCase() === 'daveepro') {
      return { userNameError: true };
    }
    return null;
  }

  static equalFields(field: string, field2: string) {
    return (control: AbstractControl): ValidationErrors => {
      const pass1 = control.get(field).value;
      const pass2 = control.get(field2).value;

      if (pass1 !== pass2) {
        control.get(field2)?.setErrors({ pssError: true });
        return {
          pssdError: true,
        };
      }
      control.get(field2)?.setErrors(null);
      return null;
    };
  }
}
