export class Card {
  public id: number = 0;
  public cost: number = 0;
  public atk: number = 0;
  public def: number = 0;
  public price: number = 0;
  public name: string = '';
  public desc: string = '';
  public img: string = '';
  public type: string = '';
}

export const CARD_TYPE: string[] = [
  'dragon',
  'undead',
  'murloc',
  'demon',
  'elemental',
];

export const CARD_LIST: Card[] = [
  {
    id: 1,
    name: 'Montre',
    desc: 'Puissant',
    cost: 9,
    atk: 9,
    def: 9,
    price: 1600,
    img: '/assets/monster.jpg',
    type: 'undead',
  },
  {
    id: 2,
    name: 'Demon',
    desc: 'Furieux',
    cost: 8,
    atk: 8,
    def: 8,
    price: 400,
    img: '/assets/demon.jpg',
    type: 'demon',
  },
  {
    id: 3,
    name: 'Dragon',
    desc: 'Volant',
    cost: 8,
    atk: 8,
    def: 8,
    price: 400,
    img: '/assets/dragon.jpg',
    type: 'dragon',
  },
  {
    id: 4,
    name: 'Murloc',
    desc: 'Mrglglggl',
    cost: 8,
    atk: 8,
    def: 8,
    price: 400,
    img: '/assets/murloc.jpg',
    type: 'murloc',
  },
  {
    id: 5,
    name: 'Elemental',
    desc: 'Esprit',
    cost: 8,
    atk: 8,
    def: 8,
    price: 400,
    img: '/assets/elemental.jpg',
    type: 'elemental',
  },
];
