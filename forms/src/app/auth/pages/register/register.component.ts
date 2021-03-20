import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  namePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.namePattern)]],
    email: [''],
    username: [''],
    password: [''],
    passwordConfirm: [''],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  validateField(field: string): boolean {
    const form = this.registerForm.controls;
    return form[field]?.touched && form[field]?.invalid;
  }

  handleSubmit() {
    this.registerForm.markAllAsTouched();
  }
}
