import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss'],
})
export class BasicsComponent implements OnInit {
  basicForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    existing: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}
}
