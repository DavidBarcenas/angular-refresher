import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styleUrls: ['./dinamics.component.scss'],
})
export class DinamicsComponent implements OnInit {
  dynamicForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.dynamicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
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
      this.dynamicForm.controls[field].errors &&
      this.dynamicForm.controls[field].touched
    );
  }

  save() {
    if (this.dynamicForm.invalid) {
      this.dynamicForm.markAllAsTouched();
      return;
    }

    this.dynamicForm.reset();
  }
}
