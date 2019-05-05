import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-princesses',
  templateUrl: './princesses.component.html',
  styleUrls: ['./princesses.component.scss']
})
export class PrincessesComponent implements OnInit {
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

  selectedPrincess;

  constructor() {}

  ngOnInit() {}

  selectPrincess(princess) {
    this.selectedPrincess = princess;
  }
}
