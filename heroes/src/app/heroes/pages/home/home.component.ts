import { Component, OnInit } from '@angular/core';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showFiller = true;
  query: string = '';
  suggestions: Hero[] = [];

  constructor(private heroService: HeroesService, private router: Router) {}

  ngOnInit(): void {}

  search() {
    if (this.query.trim() !== '') {
      this.heroService
        .getSuggestions(this.query)
        .subscribe((heroes) => (this.suggestions = heroes));
    } else {
      this.suggestions = [];
    }
  }

  optSelected(e: MatAutocompleteActivatedEvent) {
    const heroSelected: Hero = e.option.value;
    if (!heroSelected) {
      this.query = '';
      return;
    }
    this.query = heroSelected.superhero;
    this.router.navigate(['heroes', heroSelected.id]);
  }

  logout() {
    this.router.navigate(['/auth']);
  }
}
