import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[], orderBy: string = 'original'): any[] {
    switch (orderBy) {
      case 'name':
        return value.sort((a, b) => (a.name > b.name ? 1 : -1));

      case 'flying':
        return value.sort((a, b) => (a.flying > b.flying ? 1 : -1));

      default:
        return value;
    }
  }
}
