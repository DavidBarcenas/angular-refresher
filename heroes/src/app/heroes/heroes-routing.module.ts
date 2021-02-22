import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { HeroSearchComponent } from './pages/hero-search/hero-search.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'add', component: AddHeroComponent },
      { path: 'edit/:id', component: AddHeroComponent },
      { path: 'search', component: HeroSearchComponent },
      { path: ':id', component: HeroDetailComponent },
      { path: '**', redirectTo: 'add' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
