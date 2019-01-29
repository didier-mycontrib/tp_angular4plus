import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { ProdService } from "../prod.service";

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  products : Product[] ;

  constructor(private _prodService : ProdService) { }

  ngOnInit() {
    this.products = this._prodService.products;
  }

}
