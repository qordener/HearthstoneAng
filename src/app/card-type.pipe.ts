import { Pipe, PipeTransform } from '@angular/core';
import { Card } from './card';

@Pipe({
  name: 'cardType',
})
export class CardTypePipe implements PipeTransform {
  transform(cards: Card[], type: string = ''): Card[] {
    if (type === '') return cards;

    const result: Card[] = cards.filter((value: Card) => {
      return value.type.includes(type);
    });
    return result;
  }
}
