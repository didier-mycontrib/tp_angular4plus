import { Component, Input, Output , EventEmitter, OnInit , OnChanges , AfterContentInit , AfterViewInit } from '@angular/core';
import { MyData } from '../my-data';

@Component({
  selector: 'basic-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent implements OnInit , OnChanges /*, AfterContentInit , AfterViewInit*/{
	
  //NB: @Input avec () meme si vide	
	
  @Input() //synchronized value (new instance in child on write : may become not synchronized)
  public compteur : number = 0; //primitive immutable value(new number instance on write)
  
  @Input() //synchronized value (new instance in child on write : may become not synchronized)
  public message : string ="#"; //primitive immutable value(new string instance on write)
  
  @Input() //synchronized reference (same instance in child on write : always synchronized)
  public donnees : MyData = new MyData(0,"#"); //mutable object (shared instance on write)
  
  @Output()
  public messageEvent : EventEmitter<{value:string}> = new EventEmitter<{value:string}>();
  
  @Output()
  public messageChange : EventEmitter<string> = new EventEmitter<string>();
  
  constructor() { }
  
  private riseMessageEvent(){
      this.messageChange.emit(this.message); //.emit() or .next()
	  this.messageEvent.emit({value:this.message}); //.emit() or .next()
  }
  
  private detailString():string{ return " in MyChildComponent :" + this.compteur + " "+ this.message 
        + " ("+this.donnees.num + "," + this.donnees.label + ")";
  }

  ngOnInit() {
	  console.log("ngOnInit" + this.detailString());
  }
  
  ngOnChanges(){
	  console.log("ngOnChanges" + this.detailString());
  }
/*
  ngAfterContentInit(){
	  console.log("ngAfterContentInit" + this.detailString());
  }
  
  ngAfterViewInit(){
	  console.log("ngAfterViewInit" + this.detailString());
  }
  */
}
