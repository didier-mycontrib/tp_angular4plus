import {Component} from '@angular/core';

// '../' from app ,    'assets/css/bootstrap.css' from src  may be already in global styles (angular-cli.json)

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css' ],
  templateUrl: 'app.component.html',
   providers: []
})

export class AppComponent {
	 compteur=1; //pour visualiser/expérimenter changement/rechargement instance
     title : string ="Angular 4+ demo app (various items)";
}

