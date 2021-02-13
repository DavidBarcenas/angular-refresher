import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef<HTMLInputElement>;
  @Output() query: EventEmitter<string> = new EventEmitter();
  @Output() queryDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((q) => this.queryDebounce.emit(q));
  }

  emitQuery() {
    const value = this.searchInput.nativeElement.value;
    if (value.trim().length > 0) {
      this.query.emit(value);
    }
  }

  onPress() {
    const value = this.searchInput.nativeElement.value;
    this.debouncer.next(value);
  }
}
