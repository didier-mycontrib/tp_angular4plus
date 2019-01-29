import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-my-switch',
  styleUrls: [  ],
  templateUrl: './my-switch.component.html'
})
export class MySwitchComponent implements OnInit {
	
  subpart : string = "basic-simple" ; //by default

  constructor() { }

  ngOnInit() {
  }

}
