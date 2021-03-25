import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent implements OnInit {
  @ViewChild('formBasic') form: NgForm;
  
  initForm = {
     
  }

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
    this.form.reset()
  }
}
