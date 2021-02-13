import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { ICountry } from '../../interfaces/country.interface';
import { RestCountriesService } from '../../services/rest-countries.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent implements OnInit {
  country: ICountry;

  constructor(
    private activatedRoute: ActivatedRoute,
    private restCountriesService: RestCountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.restCountriesService.getCountryCode(id)),
        tap(console.log)
      )
      .subscribe((data) => (this.country = data));
  }
}
