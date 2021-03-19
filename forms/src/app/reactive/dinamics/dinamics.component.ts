import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styleUrls: ['./dinamics.component.scss'],
})
export class DinamicsComponent implements OnInit {
  dynamicForm: FormGroup;

  get favoritesArr() {
    return this.dynamicForm.controls.favorites['controls'] as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    this.dynamicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      favorites: this.formBuilder.array(
        [['Metal Gear'], ['Halo']],
        Validators.required
      ),
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

  addFavorite() {}

  deleteFavorite() {}
}
