import { Component } from '@angular/core';
import { SearchType } from '../../services/rest-countries.service';

@Component({
  selector: 'app-country',
  template: '<app-search-view [searchType]="searchType"></app-search-view>',
})
export class CountryComponent {
  searchType = SearchType.country;
}
