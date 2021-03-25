import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styleUrls: ['./dinamics.component.scss'],
})
export class DinamicsComponent implements OnInit {
  dynamicForm: FormGroup;
  favorite: FormControl;

  get favoritesArr() {
    return this.dynamicForm.controls.favorites as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    this.dynamicForm = this.formBuilder.group({
      name: [''],
      favorites: this.formBuilder.array(
        [['Metal Gear'], ['Halo']],
        [Validators.required, Validators.minLength(2)]
      ),
    });

    this.favorite = this.formBuilder.control('', Validators.required);
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

  addFavorite() {
    if (this.favorite.valid) {
      this.favoritesArr.push(this.formBuilder.control(this.favorite.value));
      this.favorite.reset();
    }
  }

  deleteFavorite(i) {
    this.favoritesArr.removeAt(i);
  }
}
