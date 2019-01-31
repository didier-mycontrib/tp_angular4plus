import { Component, OnInit } from '@angular/core';
import { Category } from "src/app/common/data/Category";
import { Spectacle } from "src/app/common/data/Spectacle";
import { SpectacleService } from "src/app/common/service/spectacle.service";
import { Session } from "src/app/common/data/Session";
import { SharedServiceForUserSession } from "src/app/common/service/shared-service-for-user-session";

@Component({
  selector: 'app-spectacle',
  templateUrl: './spectacle.component.html',
  styleUrls: ['./spectacle.component.css']
})
export class SpectacleComponent implements OnInit {

  categories : Category[] = null; //liste de categories selectionnables
  category : Category =null; //category choisie
  
  spectacles : Spectacle[] = null; //liste des spectables trouvés
  spectacle : Spectacle =null; //spectacle selectionné (à détailler)

  sessions : Session[] = null; //sessions du spectacle sélectionné

  onRechercherSessions(s:Spectacle){
    this.spectacle=s;
    if(this.spectacle==null || this.spectacle.id == null) return;
    this.sharedServiceForUserSession.selectedSpectacleId=s.id;
    console.log("spectacleId="+this.spectacle.id);
    this.spectacleService.getListeSessionsOfSpectacle$(this.spectacle.id).subscribe(
      (sessions)=>{this.sessions=sessions;}
    );
  }

  onRechercherSpectacles(){   
    if(this.category==null || this.category.id == null) return;
    this.sharedServiceForUserSession.selectedCategoryId = this.category.id;
    console.log("categoryId="+this.category.id);
    this.spectacleService.getListeSpectacle$(this.category.id).subscribe(
      (spectacles)=>{this.spectacles=spectacles;}
    );
  }

  constructor(private spectacleService : SpectacleService,
              private sharedServiceForUserSession: SharedServiceForUserSession) { }

  ngOnInit() {
    this.spectacleService.getListeCategory$().subscribe(
      (categories)=>{this.categories=categories;
                     this.syncSelectedCategoryIfNecessary();}
    );
    
  }

  private syncSelectedCategoryIfNecessary(){
    if(this.sharedServiceForUserSession.selectedCategoryId!=null){
      this.category= this.sharedServiceForUserSession.selectFromId(this.categories,
        this.sharedServiceForUserSession.selectedCategoryId);
      console.log("category="+JSON.stringify(this.category));
      this.onRechercherSpectacles();
    }
  }

}
