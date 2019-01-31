import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-space',
  templateUrl: './admin-space.component.html',
  styleUrls: ['./admin-space.component.css']
})
export class AdminSpaceComponent implements OnInit {

  authOk : boolean = false;

  onAuthentified(evt){
    this.authOk = evt.ok;
  }

  constructor() { }

  ngOnInit() {
  }

}
