import { Component } from '@angular/core';
import { SearchType } from '../../services/rest-countries.service';

@Component({
  selector: 'app-capital',
  template: '<app-search-view [searchType]="searchType"></app-search-view>',
})
export class CapitalComponent {
  searchType = SearchType.capital;
}
