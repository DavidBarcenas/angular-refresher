import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent implements OnInit {
  @ViewChild('formBasic') form: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  validateName(): boolean {
    return this.form?.controls.product?.touched && this.form?.controls.product?.invalid
  }
  
  validatePrice(): boolean {
    const price = this.form?.controls.price;
    return price?.touched && price?.value < 0
  }

  save() {
    console.log(this.form.value)
  }
}
