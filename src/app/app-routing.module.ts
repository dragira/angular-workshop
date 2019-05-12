import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponent } from './heroes/heroes/heroes.component';
// import { PrincessesComponent } from './princesses/princesses/princesses.component';

// 4. Replace empty routes by routes to components

const routes: Routes = [];

/* const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'princesses',
    component: PrincessesComponent
  }
]; */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
