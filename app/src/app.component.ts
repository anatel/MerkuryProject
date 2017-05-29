import { Component } from '@angular/core';
  
@Component({
    selector: 'app',
    templateUrl: `./app/src/app.component.html`,
		styleUrls: ['./app/src/app.component.css']
})
export class AppComponent {
		isMenuOpen = false;
		
		toggleMenu(payload: string) {
			this.isMenuOpen = !this.isMenuOpen;
		}
}