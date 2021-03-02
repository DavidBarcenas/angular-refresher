import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss'],
})
export class AddHeroComponent implements OnInit {
  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    publisher: Publisher.DCComics,
    alt_img: '',
    first_appearance: '',
  };

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  save() {
    if (this.hero.superhero.trim().length <= 2) {
      return;
    }
    this.heroesService
      .createtHero(this.hero)
      .subscribe((data) => console.log(data));
  }
}
