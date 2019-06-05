import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../devise.service';
import { Devise } from '../devise';

@Component({
  selector: 'app-devise',
  templateUrl: './devise.component.html',
  styleUrls: ['./devise.component.scss']
})
export class DeviseComponent implements OnInit {

  public  devises : Devise[] = [];

  constructor(private deviseService : DeviseService) { }

  ngOnInit() {
  }

  public onGetAllDevises(evt:any){
    this.deviseService.getDevises()
    .subscribe((devises:Devise[])=> { this.devises = devises;
                                      console.log("devises="+JSON.stringify(this.devises)); });

  }

}
