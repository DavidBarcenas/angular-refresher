import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedValidators } from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.fb.group(
    {
      name: [
        '',
        [Validators.required, Validators.pattern(SharedValidators.namePattern)],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(SharedValidators.emailPattern),
        ],
      ],
      username: ['', [Validators.required, SharedValidators.validateUsername]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
    },
    {
      validators: [SharedValidators.equalFields('password', 'passwordConfirm')],
    }
  );

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
