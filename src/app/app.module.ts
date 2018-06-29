import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GuitarsComponent } from './components/guitars/guitars.component';
import { GuitarComponent } from './components/guitar/guitar.component';


//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios

import {guitarsService} from './services/guitars.service';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GuitarsComponent,
    GuitarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
  guitarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
