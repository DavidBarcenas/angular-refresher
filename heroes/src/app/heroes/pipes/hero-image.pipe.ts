import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroImage',
})
export class HeroImagePipe implements PipeTransform {
  transform(value: string, publisher: string): string {
    const normalize =
      value.length > 0 ? value.replace(/\W/, ' ').split(' ') : [];
    const imageName = normalize[1] === 'Arrow' ? normalize[1] : normalize[0];
    const buildPath = `./assets/heroes/${
      publisher === 'DC Comics' ? 'dc-' : 'marvel-'
    }${imageName?.toLowerCase()}.jpg`;
    return buildPath;
  }
}
