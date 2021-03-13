import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
})
export class DinamicsComponent {
  person: Person = {
    name: 'Davee',
    favorites: [
      { id: 1, name: 'Metal Gear' },
      { id: 2, name: 'Warzone' },
    ],
  };

  newFavorite: string = '';

  save(form: NgForm) {
    console.log('form', form.value);
  }

  deleteFavorite(idx: number) {
    this.person.favorites.splice(idx, 1);
  }

  addFavorite() {
    this.person.favorites.push({
      id: this.person.favorites.length + 1,
      name: this.newFavorite,
    });

    this.newFavorite = '';
  }
}
