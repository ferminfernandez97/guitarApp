import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { guitarsService } from '../../services/guitars.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {


  guitars:any[] = []
  term: string;

  constructor( private activatedRoute: ActivatedRoute,
               private _guitarsService: guitarsService      ) {


               }

  ngOnInit() {


    this.activatedRoute.params.subscribe( params =>{
    this.term = params['term'];
    this.guitars = this._guitarsService.searchGuitars(params['term']);
    console.log(this.guitars);
    })


  }




}
