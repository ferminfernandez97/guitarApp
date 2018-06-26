import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GuitarsComponent } from './components/guitars/guitars.component';




//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios

import {guitarsService} from './services/guitars.service';

//Componentes



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GuitarsComponent
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
