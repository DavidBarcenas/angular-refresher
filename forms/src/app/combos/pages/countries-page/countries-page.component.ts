import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Countries } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.scss'],
})
export class CountriesPageComponent implements OnInit {
  form: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: [{ value: '', disabled: true }, Validators.required],
    border: [{ value: '', disabled: true }, Validators.required],
  });

  regions: string[] = [];
  countries: Countries[] = [];
  borders: any[] = [];
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.regions = this.countriesService.regions;
  }

  regionChange() {
    this.loading = true;
    this.cleanField('country');
    this.cleanField('border');

    this.countriesService
      .getCountriesByRegion(this.getFieldValue('region'))
      .subscribe(
        (countries) => {
          this.countries = countries;
          this.form.controls.country.enable();
        },
        (err) => console.error(err),
        () => (this.loading = false)
      );
  }

  countryChange() {
    this.loading = true;
    this.cleanField('border');

    this.countriesService.getCountry(this.getFieldValue('country')).subscribe(
      (country) => {
        this.borders = country.borders;
        this.form.controls.border.enable();
      },
      (err) => console.error(err),
      () => (this.loading = false)
    );
  }

  borderChange() {}

  cleanField(field: string): void {
    this.form.controls[field].reset('');
    this.form.controls[field].disable();

    if (field === 'country') {
      this.countries = [];
    } else {
      this.borders = [];
    }
  }

  getFieldValue(field: string): string {
    return this.form.controls[field].value;
  }

  save() {}
}
