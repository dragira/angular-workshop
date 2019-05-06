import { Injectable } from '@angular/core';
import { Princess } from '../core';

@Injectable({
  providedIn: 'root'
})
export class PrincessesService {
  princesses: Princess[] = [
    {
      id: 1,
      name: 'Rapunzel',
      favoriteColor: 'Rose',
      hair: 'Blond'
    },
    {
      id: 2,
      name: 'Ariel',
      favoriteColor: 'Green',
      hair: 'Red'
    },
    {
      id: 3,
      name: 'Snow White',
      favoriteColor: 'Blue',
      hair: 'Black'
    }
  ];

  constructor() { }

  getPrincesses(): Princess[] {
    return this.princesses;
  }
}
