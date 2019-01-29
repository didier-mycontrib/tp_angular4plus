import { Component, OnInit } from '@angular/core';

export class Person {
	constructor(public name : string = null,
				public age : number = null){
	}
}

@Component({
  selector: 'basic-with-form',
  templateUrl: './with-form.component.html',
  styleUrls: ['./with-form.component.css' ]
})
export class WithFormComponent implements OnInit {
	
  private person : Person = new Person();
  private submitted : boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(){
	  this.submitted = true;
  }

}
