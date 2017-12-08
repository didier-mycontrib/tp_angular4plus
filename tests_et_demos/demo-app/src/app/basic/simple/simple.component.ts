import { Component, OnInit } from '@angular/core';

interface Circle {
x: number;
y: number;
r: number;
}

@Component({
  selector: 'basic-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css' , '../../../assets/css/bootstrap.css']
})
export class SimpleComponent  {
	
	message: string ;
	
    values: number[] = [1,2,3,4,5,6];

    title = 'Cercle qui va bien';
  
    c1: Circle = {x: 10,y: 20,r: 50};
 
   constructor(){
	this.message = "table des carrés";
   }
 
 onNewY = function (evt : any){
    this.c1.y = evt.target.value;
 }	

}
