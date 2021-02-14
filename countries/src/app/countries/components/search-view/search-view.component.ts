import { Component, Input } from '@angular/core';
import { ICountry } from '../../interfaces/country.interface';
import {
  RestCountriesService,
  SearchType,
} from '../../services/rest-countries.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss'],
})
export class SearchViewComponent {
  @Input() searchType: SearchType = SearchType.country;

  showNotFound: boolean = false;
  searchWord: string = '';
  countries: ICountry[] = [];
  suggestions: ICountry[] = [];
  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionSelected: string = '';

  constructor(private restCountriesService: RestCountriesService) {}

  searchCountries(q: string, debounce: boolean = false): void {
    this.searchWord = q;
    this.showNotFound = false;
    this.restCountriesService.searchCountries(this.searchType, q).subscribe(
      (countries: ICountry[]) => {
        if (debounce) {
          this.suggestions = countries;
        } else {
          this.countries = countries;
        }
      },
      (error) => {
        if (error.status === 404) {
          this.showNotFound = true;
          this.countries = [];
          this.suggestions = [];
        }
      }
    );
  }

  setRegion(region: string) {
    this.regionSelected = region;
    this.searchType = SearchType.region;
    this.searchCountries(region);
  }
}
