import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUpperCase',
})
export class CustomUpperCasePipe implements PipeTransform {
  transform(value: string, upper: boolean = true): string {
    if (!upper) {
      return value.toLowerCase();
    }
    return value.toUpperCase();
  }
}
