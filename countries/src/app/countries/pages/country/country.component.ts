import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RestCountriesService } from '../../services/rest-countries.service';

const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
];

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'action',
  ];
  dataSource = ELEMENT_DATA;
  showNotFound: boolean = false;

  constructor(private restCountriesService: RestCountriesService) {}

  ngOnInit(): void {}

  searchCountry() {
    this.showNotFound = false;
    const q = this.searchInput.nativeElement.value;
    this.restCountriesService.searchCountry(q).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        if (error.status === 404) {
          this.showNotFound = true;
        }
      }
    );
  }
}
