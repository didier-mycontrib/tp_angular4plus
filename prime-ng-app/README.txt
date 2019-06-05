ng new prime-ng-app
cd prime-ng-app
ng  add  @angular/pwa 
npm install primeng --save
npm install primeicons --save

dans angular.json
=================

"styles": [
              "src/styles.scss",
			  "node_modules/primeicons/primeicons.css",
			  "node_modules/primeng/resources/themes/nova-light/theme.css",
              "node_modules/primeng/resources/primeng.min.css"
            ],
			
