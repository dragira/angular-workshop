import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincessesComponent } from './princesses/princesses.component';

const routes: Routes = [
  { path: 'princesses', component: PrincessesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincessesRoutingModule { }
