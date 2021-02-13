import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    CountryDetailComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    CountryDetailComponent,
  ],
})
export class CountriesModule {}
