import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  @ViewChild('txtSearch') searchInput: ElementRef<HTMLInputElement>;

  search() {
    const input = this.searchInput.nativeElement;
    const value = input.value;
    input.value = '';
  }
}
