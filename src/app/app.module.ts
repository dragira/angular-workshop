import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeroesModule } from './heroes/heroes.module';
import { PrincessDetailComponent } from './princesses/princess-detail/princess-detail.component';
import { PrincessesComponent } from './princesses/princesses/princesses.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincessesComponent,
    PrincessDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
