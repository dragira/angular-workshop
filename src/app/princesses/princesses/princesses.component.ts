import { Component, OnInit } from '@angular/core';
// import { PrincessesService } from '../princesses.service';

@Component({
  selector: 'app-princesses',
  templateUrl: './princesses.component.html',
  styleUrls: ['./princesses.component.scss']
})
export class PrincessesComponent implements OnInit {
  // 1. Open princesses folder in terminal and run ng g s princesses  (alias to   ng generate service princesses)
  // 2. Move princesses to service
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

  // princesses;
  selectedPrincess;

  // 3. Inject PrincessesService into constructor (replace the code below)
  constructor() {}
  // constructor(private princessesService: PrincessesService) {}

  // 4. Add getPrincesses function to ngOnInit (uncomment the code below)

  ngOnInit() {
    // this.getPrincesses();
  }

/*   getPrincesses() {
    this.princesses = this.princessesService.getPrincesses();
  } */

  selectPrincess(princess) {
    this.selectedPrincess = princess;
  }

  // 5. Add getPrincesses function below to the service (remove from here)
/*   getPrincesses() {
    return this.princesses;
  } */
}
