import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs/operators';
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

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHero(id)))
      .subscribe(
        (hero: Hero) => {
          this.hero = hero;
        },
        (error) => {
          this.hero = {
            superhero: '',
            alter_ego: '',
            characters: '',
            publisher: Publisher.DCComics,
            alt_img: '',
            first_appearance: '',
          };
        }
      );
  }

  save() {
    if (this.hero.superhero.trim().length <= 2) {
      return;
    }

    if (this.hero.id) {
      this.heroesService.updatetHero(this.hero).subscribe((hero) => {
        this.router.navigate(['/heroes', hero.id]);
      });
    } else {
      this.heroesService.createtHero(this.hero).subscribe((hero) => {
        this.router.navigate(['/heroes', hero.id]);
        console.log('Save!!');
      });
    }
  }
}
