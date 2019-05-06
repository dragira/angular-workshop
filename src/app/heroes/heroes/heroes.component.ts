import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroes = this.heroesService.getHeroes();
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
