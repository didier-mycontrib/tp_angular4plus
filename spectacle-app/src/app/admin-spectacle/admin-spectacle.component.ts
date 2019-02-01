import { Component, OnInit } from '@angular/core';
import { Category } from '../common/data/Category';
import { Spectacle } from '../common/data/Spectacle';
import { Session } from '../common/data/Session';
import { SpectacleService } from '../common/service/spectacle.service';


@Component({
  selector: 'app-admin-spectacle',
  templateUrl: './admin-spectacle.component.html',
  styleUrls: ['./admin-spectacle.component.css']
})
export class AdminSpectacleComponent implements OnInit {

  categories: Category[] = null; //liste de categories selectionnables
  category: Category = null; //category choisie

  spectacles: Spectacle[] = null; //liste des spectables trouvés
  spectacle: Spectacle = null; //spectacle selectionné (à détailler)
  newSpectacle : Spectacle = new Spectacle();

  sessions: Session[] = null; //sessions du spectacle sélectionné

  titleOfNewCategory : string ;

  constructor(private spectacleService: SpectacleService) { }

  ngOnInit() {
    this.fetchCategories();
  }

  onAjoutCategory(){
    let newCategory = new Category();
    newCategory.title = this.titleOfNewCategory;
    this.spectacleService.postCategory$(newCategory)
        .subscribe((c)=>{this.categories.push(c);});
  }

  fetchCategories(){
    this.spectacleService.getListeCategory$().subscribe(
      (categories) => {
      this.categories = categories;
      }
    );
  }

  onRechercherSpectacles() {
    if (this.category == null || this.category.id == null) return;
    this.spectacleService.getListeSpectacle$(this.category.id).subscribe(
      (spectacles) => { this.spectacles = spectacles; }
    );
  }

  onSelectionnerSpectacle(s:Spectacle){
    this.spectacle=s;
  }

  onAjoutSpectacle(){
    this.spectacleService.postSpectacle$(this.newSpectacle,this.category.id)
      .subscribe((sa) => { 
        console.log("spectacle addition: " + JSON.stringify(sa));
        this.spectacles.push(sa.spectacle); 
      });
    this.newSpectacle = new Spectacle();
  }

}
