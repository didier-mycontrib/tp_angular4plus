import { Injectable } from '@angular/core';
import { Observable , of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedServiceForUserSession {

  public selectedCategoryId : number;
  public selectedSpectacleId : number;
  public selectedSpectacleSessionId : number;
  //...

  public selectFromId(tab: any[],id:number) : any{
       let elt : object = null;
       for(let e of tab){
         if(e.id==id) {
           elt = e; break;
         }
       }
       return elt;
  }

  constructor() { }

}

