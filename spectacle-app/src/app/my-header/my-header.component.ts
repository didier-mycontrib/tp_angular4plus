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
    { label : "Espace Client" , path : "ngr/customer" } , 
    { label : "Espace Admin" , path : "ngr/admin" } , 
   /* { label : "Espace client" , 
    children : [
      { label : "login/client" , path : "ngr/client" } ,
      { divider : true },
      { label : "reservations" , path : "ngr/reservation" }
      ]
    },
    { label : "Espace Administrateur" , 
      children : [
        { label : "login/admin" , path : "ngr/login-admin" } ,
        { divider : true },
        { label : "admin spectacles" , path : "ngr/admin-spectacle" }
      ]
    } */
    ];
  

  constructor() { }

  ngOnInit() {
  }

}
