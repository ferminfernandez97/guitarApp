import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { guitarsService, Guitar } from '../../services/guitars.service';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html'
})
export class GuitarComponent  {

  guitar:any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _guitarsService: guitarsService
  ) {


    this.activatedRoute.params.subscribe( params =>{
      this.guitar = this._guitarsService.getGuitar( params['id']);
      console.log(this.guitar);
    })


  }

}
