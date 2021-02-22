import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './pages/hero-search/hero-search.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AddHeroComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HomeComponent,
    HeroListComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule, MaterialModule],
})
export class HeroesModule {}