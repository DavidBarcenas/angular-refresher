import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ICountry } from '../../interfaces/country.interface';
import { SearchType } from '../../services/rest-countries.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  @Output() query: EventEmitter<string> = new EventEmitter();
  @Output() queryDebounce: EventEmitter<string> = new EventEmitter();
  @Input() suggestions: ICountry[] = [];
  @Input() searchType: SearchType = SearchType.country;

  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((q) => this.queryDebounce.emit(q));
  }

  emitQuery(q?: string) {
    const value = this.searchInput.nativeElement.value || q;
    if (value.trim().length > 0) {
      this.query.emit(value);
    }
  }

  onPress() {
    const value = this.searchInput.nativeElement.value;
    if (value.trim() !== '') {
      this.debouncer.next(value);
    } else {
      this.suggestions = [];
    }
  }
}
