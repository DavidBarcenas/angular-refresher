import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICountry } from '../../interfaces/country.interface';
import { RestCountriesService } from '../../services/rest-countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  showNotFound: boolean = false;
  countries: ICountry[] = [];
  sugess = [];

  constructor(private restCountriesService: RestCountriesService) {}

  ngOnInit(): void {}

  searchCountry(q: string): void {
    this.showNotFound = false;
    this.restCountriesService.searchCountry(q).subscribe(
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
    this.restCountriesService.searchCountry(q).subscribe(
      (countries: ICountry[]) => {
        this.sugess = countries.splice(0, 10);
        console.log(this.sugess);
      },
      (error) => {
        if (error.status === 404) {
          this.showNotFound = true;
          this.countries = [];
        }
      }
    );
  }
}
