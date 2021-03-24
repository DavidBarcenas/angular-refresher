import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.scss'],
})
export class CountriesPageComponent implements OnInit {
  form: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
  });

  regions: string[] = [];
  countries: Country[] = [];

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.regions = this.countriesService.regions;
  }

  regionChange() {
    const region = this.form.controls.region.value;
    this.countriesService
      .getCountriesByRegion(region)
      .subscribe((countries: Country[]) => (this.countries = countries));
  }

  countryChange() {}

  save() {}
}
