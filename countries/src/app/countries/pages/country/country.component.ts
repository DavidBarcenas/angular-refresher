import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICountry } from '../../interfaces/country.interface';
import { RestCountriesService } from '../../services/rest-countries.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;

  displayedColumns: string[] = ['code', 'flag', 'name', 'population', 'action'];
  dataSource: ICountry[] = [];
  showNotFound: boolean = false;

  constructor(private restCountriesService: RestCountriesService) {}

  ngOnInit(): void {}

  searchCountry(): void {
    this.showNotFound = false;
    const q = this.searchInput.nativeElement.value;
    this.restCountriesService.searchCountry(q).subscribe(
      (countries: ICountry[]) => {
        console.log(countries);
        this.dataSource = countries;
      },
      (error) => {
        if (error.status === 404) {
          this.showNotFound = true;
          this.dataSource = [];
        }
      }
    );
  }
}
