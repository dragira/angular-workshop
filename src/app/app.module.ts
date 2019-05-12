import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeroesModule } from './heroes/heroes.module';
import { PrincessDetailComponent } from './princesses/princess-detail/princess-detail.component';
// import { PrincessesModule } from './princesses/princesses.module';
import { PrincessesComponent } from './princesses/princesses/princesses.component';

// 1. Create princesses module from app folder: run 'ng g m princesses' from terminal
// 2. Insert PrincessesComponent and PrincessDetailComponent into declarations AND export in PrincessesModule
// 3. Insert PrincessesModule into imports in AppModule (uncomment the line)
// 4. Remove PrincessesComponent and PrincessDetailComponent from  declarations in AppModule

// Bonus: routing in PrincessesModule
// 1. Create file princesses-routing.module.ts in princesses folder
// 2. In the new file select snippet a-module-with-routing (start typing a-module... and select from the list).
//    Rename the module to PrincessesRoutingModule. Add RouterModule to exports.
// 3. Import PrincessesRoutingModule in PrincessesModule.
// 4. Use snippet a-route-path-eager inside 'const routes: Routes = [];' in PrincessesRoutingModule.
//    Replace path by 'princesses', and component by PrincessesComponent.

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
    // PrincessesModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
