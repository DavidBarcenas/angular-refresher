import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/country.interface';
import { RestCountriesService } from '../../services/rest-countries.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {
  showNotFound: boolean = false;
  countries: ICountry[] = [];

  constructor(private restCountriesService: RestCountriesService) {}

  ngOnInit(): void {}

  searchCountry(q: string): void {
    this.showNotFound = false;
    this.restCountriesService.searchRegion(q).subscribe(
      (countries: ICountry[]) => {
        this.countries = countries;
      },
      (error) => {
        if (error.status === 404) {
          this.showNotFound = true;
          this.countries = [];
        }
      }
    );
  }

  suggestions(q: string) {
    this.showNotFound = false;
  }
}
