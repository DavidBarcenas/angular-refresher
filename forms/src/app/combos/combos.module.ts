import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombosRoutingModule } from './combos-routing.module';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';

@NgModule({
  declarations: [CountriesPageComponent],
  imports: [CommonModule, CombosRoutingModule],
})
export class CombosModule {}
