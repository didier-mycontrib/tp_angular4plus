import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-space',
  templateUrl: './customer-space.component.html',
  styleUrls: ['./customer-space.component.css']
})
export class CustomerSpaceComponent implements OnInit {

  message: string = "espace client";

  constructor(route: ActivatedRoute) { 
    const action: string = route.snapshot.params['action'];
    if(action != null)
    {
      this.message=action;
    }
  }

  ngOnInit() {
  }

}
