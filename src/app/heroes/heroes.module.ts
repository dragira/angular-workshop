import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule
  ],
  exports: [
    HeroesComponent,
    HeroDetailComponent
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ]
})
export class HeroesModule {}
