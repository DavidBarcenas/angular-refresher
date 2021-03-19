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
      name: ['', [Validators.required]],
      price: [
        0,
        [Validators.required, Validators.min(0), Validators.max(99.99)],
      ],
      existing: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}
}
