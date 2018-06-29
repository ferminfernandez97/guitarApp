import { Component, OnInit } from '@angular/core';
import {guitarsService, Guitar} from '../../services/guitars.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html'
})
export class GuitarsComponent implements OnInit {

  guitars:Guitar[] = [];

  constructor(private _guitarsService:guitarsService,
              private router:Router
  ) {
//    console.log("constructor");
   }

  ngOnInit() {
    this.guitars = this._guitarsService.getGuitars();
//    console.log(this.guitars);
  }
  showGuitar( idx:number ){
    this.router.navigate( ['/guitar',idx] );
  }

}
