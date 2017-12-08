import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-my-switch',
  styleUrls: [ '../../assets/css/bootstrap.css' ],
  templateUrl: './my-switch.component.html'
})
export class MySwitchComponent implements OnInit {
	
  subpart : string = "basic-simple" ; //by default

  constructor() { }

  ngOnInit() {
  }

}
