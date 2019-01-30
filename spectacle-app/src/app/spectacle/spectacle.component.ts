import { Component, OnInit } from '@angular/core';
import { Category } from "src/app/common/data/Category";
import { Spectacle } from "src/app/common/data/Spectacle";
import { SpectacleService } from "src/app/common/service/spectacle.service";
import { Session } from "src/app/common/data/Session";

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
    console.log("spectacleId="+this.spectacle.id);
    this.spectacleService.getListeSessionsOfSpectacle$(this.spectacle.id).subscribe(
      (sessions)=>{this.sessions=sessions;}
    );
  }

  onRechercherSpectacles(){
    if(this.category==null || this.category.id == null) return;
    console.log("categoryId="+this.category.id);
    this.spectacleService.getListeSpectacle$(this.category.id).subscribe(
      (spectacles)=>{this.spectacles=spectacles;}
    );
  }

  constructor(private spectacleService : SpectacleService) { }

  ngOnInit() {
    this.spectacleService.getListeCategory$().subscribe(
      (categories)=>{this.categories=categories;}
    );
  }

}
