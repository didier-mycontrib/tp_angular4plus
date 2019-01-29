import { Injectable } from '@angular/core';
import { Product } from "./product";

@Injectable()
export class ProdService {

  products : Product[] = [
    { num : 1 , label : "stylo" , price : 1.672334 } ,
    { num : 2 , label : "cahier" , price : 3.2488 } ,
    { num : 3 , label : "gomme" , price : 2.89677 } ,
    { num : 4 , label : "cartable" , price : 26.27934 } ,
    { num : 5 , label : "crayon" , price : 0.97934 } 
  ];

  constructor() { }

}
