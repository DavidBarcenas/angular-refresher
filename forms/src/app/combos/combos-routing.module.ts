import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'countries', component: CountriesPageComponent },
      { path: '**', redirectTo: 'countries', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CombosRoutingModule {}
