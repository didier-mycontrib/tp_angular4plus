import { Component, OnInit, Input } from '@angular/core';
import { MenuDefinition } from "src/bs-util/data/MenuDefinition";

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {

  @Input()
  title : string = "";

  myMenuDefs :MenuDefinition[] = [
    
    { label : "Spectacles" , path : "ngr/spectacle" } , 
    { label : "Client" , path : "ngr/client" } ,
    { label : "Reservations" , 
      children : [
        { label : "suivi" , path : "ngr/reservation" } ,
        { label : "..." , path : "ngr/welcome" },
        { divider : true },
        { label : "..." , path : "ngr/welcome" }
      ]
    }
    ];
  

  constructor() { }

  ngOnInit() {
  }

}
