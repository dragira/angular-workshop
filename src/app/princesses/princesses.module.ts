import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrincessDetailComponent } from './princess-detail/princess-detail.component';
import { PrincessesRoutingModule } from './princesses-routing.module';
import { PrincessesComponent } from './princesses/princesses.component';

@NgModule({
  declarations: [
    PrincessesComponent,
    PrincessDetailComponent
  ],
  imports: [
    CommonModule,
    PrincessesRoutingModule
  ],
  exports: [
    PrincessesComponent,
    PrincessDetailComponent
  ]
})
export class PrincessesModule { }
