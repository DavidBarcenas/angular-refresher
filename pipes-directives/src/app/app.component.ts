import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myDate = new Date();
  myNumber = 1023655478;
  myCurrency = 1023;
  myPercentage = 0.48;
}
