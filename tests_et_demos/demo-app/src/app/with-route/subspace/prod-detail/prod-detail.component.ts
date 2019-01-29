import { Component, OnInit } from '@angular/core';
import { ProdService } from "../prod.service";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from '@angular/common';
import { Product } from "../product";

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.css']
})
export class ProdDetailComponent implements OnInit {

  numProd : number;
  prod: Product;

  constructor(private _prodService : ProdService,
              private _location : Location,
              private _route : ActivatedRoute) { }

  ngOnInit() {
     this._route.params.subscribe( (params : Params) => { this.numProd = Number(params['num']); 
                                                          this.fetchProd()} );
  }

  fetchProd(){
    let products = this._prodService.products;
    for(let p of products){
      if(p.num == this.numProd){
         this.prod = p; break;
      }
    }
  }

  onBack(){
   this._location.back();
}

}
