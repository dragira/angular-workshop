import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes = [
    {
      id: 1,
      name: 'Dumbledore',
      weapon: 'Wand',
      beard: 'Long beard'
    },
    {
      id: 2,
      name: 'Sauron',
      weapon: 'Ring',
      beard: 'No beard'
    },
    {
      id: 3,
      name: 'Gandalf',
      weapon: 'Sword',
      beard: 'Long beard'
    }
  ];

  constructor() { }

  getHeroes() {
    return this.heroes;
  }
}
