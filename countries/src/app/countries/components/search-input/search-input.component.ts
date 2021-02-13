import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  @Output() query: EventEmitter<string> = new EventEmitter();

  emitQuery() {
    this.query.emit(this.searchInput.nativeElement.value);
  }
}
