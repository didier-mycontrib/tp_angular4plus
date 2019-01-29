import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySortBy'
})
export class MySortByPipe implements PipeTransform {

  transform(tab: Array<any>, args?: string): Array<any> {
	tab.sort( (p1:any , p2 : any) => {
		if(args == "-price") return (p2.price - p1.price);
		if(args == "+price") return (p1.price - p2.price);
		if(args == "-label") {
			if(p1.label <= p2.label) return 1; 
			/*else*/return -1;
		}
		if(args == "+label") {
			if(p1.label >= p2.label) return 1; 
			/*esle*/ return -1;
		}
		//... a beaucoup ameliorer...
		/*else*/ return 0;
	});		
    return tab;
  }

}
