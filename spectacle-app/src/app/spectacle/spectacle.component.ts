import { Component, OnInit } from '@angular/core';
import { Category } from "src/app/common/data/Category";
import { Spectacle } from "src/app/common/data/Spectacle";
import { SpectacleService } from "src/app/common/service/spectacle.service";

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
