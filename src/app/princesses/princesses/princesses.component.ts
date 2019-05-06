import { Component, OnInit } from '@angular/core';
import { Princess } from 'src/app/core';
import { PrincessesService } from '../princesses.service';

@Component({
  selector: 'app-princesses',
  templateUrl: './princesses.component.html',
  styleUrls: ['./princesses.component.scss']
})
export class PrincessesComponent implements OnInit {
  princesses: Princess[];
  selectedPrincess: Princess;

  constructor(private princessesService: PrincessesService) {}

  ngOnInit() {
    this.getPrincesses();
  }

  getPrincesses() {
    this.princesses = this.princessesService.getPrincesses();
  }

  selectPrincess(princess: Princess) {
    this.selectedPrincess = princess;
  }
}
