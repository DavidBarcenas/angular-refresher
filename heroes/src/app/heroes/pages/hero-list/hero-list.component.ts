import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private heroesService: HeroesService) {
    this.heroes$ = this.heroesService.getHeroes();
  }

  ngOnInit(): void {}
}
