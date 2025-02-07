import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
  standalone: false,
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    return value
      .split(' ')
      .map((word) => {
        const startingLetter = word[0].toUpperCase();
        return startingLetter + word.slice(1).toLocaleLowerCase();
      })
      .join(' ');
  }
}
