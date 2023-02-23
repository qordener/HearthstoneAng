import { Component, OnInit } from '@angular/core';
import { Card, DEFAULT_TYPE } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  public list: Card[] = [];
  public types: any[] = [];
  public currentType: string = DEFAULT_TYPE;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService
      .getAllCards()
      .subscribe((cards: Card[]) => (this.list = cards));
    this.cardService
      .getAllTypes()
      .subscribe((types: any[]) => (this.types = types));
    this.cardService
      .getDefaultType()
      .subscribe((currentType: string) => (this.currentType = currentType));
  }
}
