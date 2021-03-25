import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
})
export class SwitchesComponent implements OnInit {
  switchesForm: FormGroup;
  person = {
    gender: 'F',
    notification: true,
  };

  constructor(private fb: FormBuilder) {
    this.switchesForm = this.fb.group({
      gender: ['M', Validators.required],
      notifications: [true, Validators.requiredTrue],
      terms: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    this.switchesForm.patchValue(this.person);
  }

  save() {
    this.person = this.switchesForm.value;
  }
}
