import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../devise.service';
import { ResConv } from '../res-conv';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  public currencyCodes = [ "EUR" , "USD" , "JPY" , "GBP" ];

  public source : string = "EUR";
  public cible : string = "USD";
  public montantSource : number = 100;
  public montantCible : number;

  constructor(private deviseService : DeviseService) { }

  ngOnInit() {
  }

  public onConvertir(evt:any){
    this.deviseService.convertir(this.montantSource,this.source,this.cible)
        .subscribe((resConv:ResConv)=> { this.montantCible = resConv.montantConverti;
                                          console.log("resConv="+JSON.stringify(resConv)); });
    
  }

}
