import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { ResConv } from './res-conv';
import { HttpClient } from '@angular/common/http';
import { Devise } from './devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  //avec ng serve --proxy-config proxy.conf.json
  private baseUrl = "deviseApi/rest/public/devises";

  public convertir( montant  : number,  source :string ,   cible : string) : Observable<ResConv> {
    let convertirUrl : string = null;
    convertirUrl = this.baseUrl + "/convertir?montant="+montant
                   +"&source="+source+"&cible=" + cible ;
    console.log( "convertirUrl = " + convertirUrl);
    return this.http.get<ResConv>(convertirUrl );
  }

  public getDevises() : Observable<Devise[]> {
    let deviseUrl : string = null;
    deviseUrl = this.baseUrl ;
    console.log( "deviseUrl = " + deviseUrl);
    return this.http.get<Devise[]>(deviseUrl );
  }

  public initDevises() : Observable<Devise[]> {
    let initDeviseUrl  ="deviseApi/rest/public/init-devises";
    console.log( "initDeviseUrl = " + initDeviseUrl);
    return this.http.get<Devise[]>(initDeviseUrl );
  }

  constructor(private http : HttpClient) { }
}
