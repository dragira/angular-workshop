import { Component, OnInit } from '@angular/core';
// import { Princess } from '../../core';
import { PrincessesService } from '../princesses.service';

@Component({
  selector: 'app-princesses',
  templateUrl: './princesses.component.html',
  styleUrls: ['./princesses.component.scss']
})
export class PrincessesComponent implements OnInit {
  // 1. Create a new file prinsess.ts in core/model and put following class there. Add file to index.ts
/*   export class Princess {
    id: number;
    name: string;
    favoriteColor: string;
    hair: string;
  } */

  // 2. Add types to princesses and selectedPrincess
  princesses;
  selectedPrincess;
  // princesses: Princess[];
  // selectedPrincess: Princess;

  constructor(private princessesService: PrincessesService) {}

  ngOnInit() {
    this.getPrincesses();
  }

  getPrincesses() {
    this.princesses = this.princessesService.getPrincesses();
  }

  // 3. Add types to the function (uncomment and replace)
  selectPrincess(princess) {
    this.selectedPrincess = princess;
  }

  /* selectPrincess(princess: Princess) {
    this.selectedPrincess = princess;
  } */
}
