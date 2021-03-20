import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,4})$/;

  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    username: ['', [Validators.required, this.validateUsername]],
    password: [''],
    passwordConfirm: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  validateUsername(control: FormControl): ValidationErrors {
    if (control.value?.trim().toLowerCase() === 'daveepro') {
      return { userNameError: true };
    }
    return null;
  }

  validateField(field: string): boolean {
    const form = this.registerForm.controls;
    return form[field]?.touched && form[field]?.invalid;
  }

  handleSubmit() {
    this.registerForm.markAllAsTouched();
  }
}
