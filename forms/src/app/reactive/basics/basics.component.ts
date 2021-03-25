import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss'],
})
export class BasicsComponent implements OnInit {
  basicForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.basicForm = this.formBuilder.group({
      name: [, [Validators.required]],
      price: [
        ,
        [Validators.required, Validators.min(0), Validators.max(99.99)],
      ],
      existing: [, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  getValidate(field: string) {
    return (
      this.basicForm.controls[field].errors &&
      this.basicForm.controls[field].touched
    );
  }

  save() {
    if (this.basicForm.invalid) {
      this.basicForm.markAllAsTouched();
      return;
    }

    this.basicForm.reset();
  }
}
