import { Component, Input, OnInit } from '@angular/core';
// import { Princess } from '../../core';

@Component({
  selector: 'app-princess-detail',
  templateUrl: './princess-detail.component.html',
  styleUrls: ['./princess-detail.component.scss']
})
export class PrincessDetailComponent implements OnInit {
  // 6. Add class to princess (uncomment and replace)

  @Input() princess;
  // @Input() princess: Princess;

  constructor() { }

  ngOnInit() {
  }

}
