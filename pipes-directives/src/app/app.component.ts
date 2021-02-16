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

  // i18nSelect
  change = false;
  name = 'David';
  gender = 'male';
  genderMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  // i18Plural
  // # => interpolate the array number || value array
  clients = ['Maria', 'Roberto', 'Eduardo', 'Paula'];
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: `tenemos # clientes esperando`,
  };

  changePerson() {
    this.change = !this.change;
    this.name = this.change ? 'Susana' : 'David';
    this.gender = this.change ? 'female' : 'male';
  }

  deleteClient() {
    this.clients.pop();
  }
}
