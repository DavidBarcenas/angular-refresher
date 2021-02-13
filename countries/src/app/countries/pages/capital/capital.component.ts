import { Component, OnInit } from '@angular/core';
import { ICountry } from '../../interfaces/country.interface';
import { RestCountriesService } from '../../services/rest-countries.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss'],
})
export class CapitalComponent implements OnInit {
  showNotFound: boolean = false;
  countries: ICountry[] = [];

  constructor(private restCountriesService: RestCountriesService) {}

  ngOnInit(): void {}

  searchCountry(q: string): void {
    this.showNotFound = false;
    this.restCountriesService.searchCapital(q).subscribe(
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
