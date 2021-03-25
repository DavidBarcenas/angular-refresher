import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CombosRoutingModule } from './combos-routing.module';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';

@NgModule({
  declarations: [CountriesPageComponent],
  imports: [CommonModule, CombosRoutingModule, ReactiveFormsModule],
})
export class CombosModule {}
