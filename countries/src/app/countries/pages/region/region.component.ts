import { Component } from '@angular/core';
import { SearchType } from '../../services/rest-countries.service';

@Component({
  selector: 'app-region',
  template: '<app-search-view [searchType]="searchType"></app-search-view>',
})
export class RegionComponent {
  searchType = SearchType.region;
}
