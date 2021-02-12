import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapitalComponent } from './countries/pages/capital/capital.component';
import { CountryDetailComponent } from './countries/pages/country-detail/country-detail.component';
import { CountryComponent } from './countries/pages/country/country.component';
import { RegionComponent } from './countries/pages/region/region.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CountryComponent },
  { path: 'region', component: RegionComponent },
  { path: 'capital', component: CapitalComponent },
  { path: 'country/:id', component: CountryDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
