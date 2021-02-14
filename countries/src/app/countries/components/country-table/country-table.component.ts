import { Component, Input } from '@angular/core';
import { ICountry } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss'],
})
export class CountryTableComponent {
  @Input() countries: ICountry[] = [];
  displayedColumns: string[] = ['code', 'flag', 'name', 'population', 'action'];
}
