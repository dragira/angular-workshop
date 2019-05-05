import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
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

  selectedHero;

  constructor() {}

  ngOnInit() {}

  selectHero(hero) {
    this.selectedHero = hero;
  }
}
