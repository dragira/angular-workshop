import { Injectable } from '@angular/core';
// import { Princess } from '../core';

@Injectable({
  providedIn: 'root'
})
export class PrincessesService {
  // 4. Add class to princesses: Princess[]
  princesses = [
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

  // 5. Add class to the function (uncomment and replace)

  getPrincesses() {
    return this.princesses;
  }

  /* getPrincesses(): Princess[] {
    return this.princesses;
  } */
}
