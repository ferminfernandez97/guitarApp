import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { guitarsService , Guitar } from '../../services/guitars.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {


  guitars:any[] = []
  term: string;

  constructor( private activatedRoute: ActivatedRoute,
               private _guitarsService: guitarsService,
               private router:Router                      ) {


               }

  ngOnInit() {


    this.activatedRoute.params.subscribe( params =>{
    this.term = params['term'];
    this.guitars = this._guitarsService.searchGuitars(params['term']);
    console.log("The search was used");
    })


  }

  showGuitar( idx:number ){
    this.router.navigate( ['/guitar',idx] );
  }





}
