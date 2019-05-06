import { Component, Input, OnInit } from '@angular/core';
import { Princess } from 'src/app/core';

@Component({
  selector: 'app-princess-detail',
  templateUrl: './princess-detail.component.html',
  styleUrls: ['./princess-detail.component.scss']
})
export class PrincessDetailComponent implements OnInit {
  @Input() princess: Princess;

  constructor() { }

  ngOnInit() {
  }

}
