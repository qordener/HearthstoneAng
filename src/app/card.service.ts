import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Card, DEFAULT_TYPE } from './card';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private http: HttpClient) {}

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(environment.cardsApiUrl);
  }
  getAllTypes(): Observable<any[]> {
    return this.http.get<any[]>(environment.cardTypesApiUrl);
  }

  getDefaultType(): Observable<string> {
    return this.getAllTypes().pipe(
      map((types: any) => {
        const result: any[] = types.filter((cur: any) => cur.default);
        if (result.length > 0) {
          return result.shift().type;
        } else {
          return DEFAULT_TYPE;
        }
      })
    );
  }
}
