import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Spectacle } from "src/app/common/data/Spectacle";
import { Category } from "src/app/common/data/Category";
import { Observable , of } from "rxjs";
import { Session } from "src/app/common/data/Session";
import { SpectacleAddition } from './../data/Spectacle-addition';

@Injectable({
  providedIn: 'root'
})
export class SpectacleService {

  private _SpectacleBaseUrl = "./spectacle-api/public/spectacle" ; //avec ng serve --proxy-config proxy.conf.json
  private _adminSpectacleBaseUrl = "./spectacle-api/spectacle" ; 

  private _headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private _http : HttpClient) { }

  public getListeCategory$():Observable<Category[]>{
    //return of([{id:1,title:"theatre"},{id:2,title:"concert"}]);
    return this._http.get<Category[]>(this._SpectacleBaseUrl +"/allCategories");
}

  public postCategory$(category: Category): Observable<Category> {
    let categoryUrl: string = this._adminSpectacleBaseUrl+"/category";
    return this._http.post<Spectacle>(categoryUrl, category,
      { headers: this._headers }
      );
  }

  public postSpectacle$(spectacle: Spectacle, idCategory: number): Observable<SpectacleAddition> {
    let spectacleAddion : SpectacleAddition = new SpectacleAddition();
    spectacleAddion.spectacle = spectacle;
    spectacleAddion.categoryId = idCategory;
    let spectacleUrl: string = this._adminSpectacleBaseUrl;
    return this._http.post<SpectacleAddition>(spectacleUrl, spectacleAddion,
      { headers: this._headers } );
    }

  public getListeSpectacle$(categoryId:number):Observable<Spectacle[]>{
      let  SpectacleUrl : string = this._SpectacleBaseUrl 
           + "?categoryId=" + categoryId;
      return this._http.get<Spectacle[]>(SpectacleUrl );
      /*
      if(categoryId==1)
       return of([{id:1,title:"piece theatre 1" , duration : 90 , price: 22.5},
                 {id:2,title:"piece theatre 2" ,  duration : 120 , price: 26.5}]);
       else return of([{id:1,title:"concert 1" , duration : 80 , price: 32.5},
                 {id:2,title:"concert 2" ,  duration : 240 , price: 42.5}]);
      */
  }

  public getListeSessionsOfSpectacle$(spectacleId:number):Observable<Session[]>{
    let  SpectacleSessionsUrl : string = this._SpectacleBaseUrl 
         + "/sessions?spectacleId=" + spectacleId;
    return this._http.get<Session[]>(SpectacleSessionsUrl );
    /*
    if(spectacleId==1)
     return of([{id:1,date:"2019-01-23" , startTime : "19:30:00" , nbRemainingPlaces: 22},
               {id:2,date:"2019-02-20" , startTime : "20:30:00" , nbRemainingPlaces: 52}]);
     else return of([{id:3,date:"2019-03-03" , startTime : "21:30:00" , nbRemainingPlaces: 62},
               {id:4,date:"2019-04-24" , startTime : "22:00:00" , nbRemainingPlaces: 42}]);
    */
}

  public deleteSpectacleServerSide$(SpectacleId):Observable<any>{
    console.log("deleting Spectacle of _id = " + SpectacleId );
    let  deleteSpectacleUrl : string = this._SpectacleBaseUrl + "/"  + SpectacleId;
    console.log("deleteSpectacleUrl= " + deleteSpectacleUrl );
    return this._http.delete(deleteSpectacleUrl );
   }

}

