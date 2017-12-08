import {Component} from '@angular/core';



@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css','../assets/css/bootstrap.css' ],
  templateUrl: 'app.component.html',
   providers: []
})

export class AppComponent {
	 compteur=1; //pour visualiser/expérimenter changement/rechargement instance
     title : string ="Angular 4+ demo app (various items)";
}

