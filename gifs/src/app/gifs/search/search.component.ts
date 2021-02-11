import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  @ViewChild('txtSearch') searchInput: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search() {
    const input = this.searchInput.nativeElement;
    const value = input.value;
    if (value.trim().length > 0) {
      this.gifsService.searchGifs(value);
    }
    input.value = '';
  }
}
