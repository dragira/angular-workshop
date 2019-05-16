import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-princesses',
  templateUrl: './princesses.component.html',
  styleUrls: ['./princesses.component.scss']
})
export class PrincessesComponent implements OnInit {
  // 1. Add <app-princesses></app-princesses> into app.component.html (uncomment the code)
  // 2. Open app folder in terminal and run ng g c princess-detail  (alias to   ng generate component princess-detail)
  // 3. Add @Input() princess; into princess-detail.component.ts
  // 4. Uncomment code for app-princess-detail component in princesses.component.html
  // 5. Copy code from hero-detail.component.html, insert in princess-detail.component.html, replace hero properties by princess properties
  //    You should get something like this
/*   <div class="container">
  <div class="title">
    <p>Princess details</p>
  </div>
  <div class="content">
    <div class="item-text">
      <span>
        Name: <b>{{ princess.name }}</b>
      </span>
    </div>
    <div class="item-text">
      <span>
        Favorite color: <b>{{ princess.favoriteColor }}</b>
      </span>
    </div>
    <div class="item-text">
      <span>
        Hair: <b>{{ princess.hair }}</b>
      </span>
    </div>
  </div>
</div> */
  // 6. Copy code from hero-detail.component.scss, insert into princess-detail.component.scss, add background: #fc99cc; for class .title

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
