import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { AboutComponent} from './components/about/about.component';
import { GuitarsComponent} from './components/guitars/guitars.component';
import { GuitarComponent} from './components/guitar/guitar.component';
import { SearchComponent} from './components/search/search.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'guitars', component: GuitarsComponent },
  { path: 'guitar/:id', component: GuitarComponent },
  { path: 'search/:term', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
