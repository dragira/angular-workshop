import { Component, OnInit } from '@angular/core';
import { PrincessesService } from '../princesses.service';

@Component({
  selector: 'app-princesses',
  templateUrl: './princesses.component.html',
  styleUrls: ['./princesses.component.scss']
})
export class PrincessesComponent implements OnInit {
  princesses;
  selectedPrincess;

  constructor(private princessesService: PrincessesService) {}

  ngOnInit() {
    this.getPrincesses();
  }

  getPrincesses() {
    this.princesses = this.princessesService.getPrincesses();
  }

  selectPrincess(princess) {
    this.selectedPrincess = princess;
  }
}
