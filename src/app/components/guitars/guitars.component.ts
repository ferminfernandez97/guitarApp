import { Component, OnInit } from '@angular/core';
import {guitarsService, Guitar} from '../../services/guitars.service';

@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html'
})
export class GuitarsComponent implements OnInit {

  guitars:Guitar[] = [];

  constructor(private _guitarsService:guitarsService) {
    console.log("constructor");
   }

  ngOnInit() {
    this.guitars = this._guitarsService.getGuitars();
    console.log(this.guitars);
  }

}
