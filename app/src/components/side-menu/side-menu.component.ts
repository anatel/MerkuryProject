import { Component, Input, Output, EventEmitter } 		from '@angular/core';
import { MenuItem } 						from '../../models/menu-item';
import { Logo } 								from '../../models/logo';
import { DataService }					from '../../services/data.service';

@Component({
	selector: 'side-menu',
	templateUrl: './app/src/components/side-menu/side-menu.component.html',
	styleUrls: ['./app/src/components/side-menu/side-menu.component.css']
})
export class SideMenuComponent {
	
	menuItems: MenuItem[];
	logo: Logo;
	selectedItem: string;
	@Input() isOpen: boolean;
	@Output() isOpenChange: EventEmmiter = new EventEmitter();
	
	constructor(private dataService: DataService) {}

	ngOnInit() {
			this.getMenuData();
	}
	
	getMenuData() {
		this.dataService.getMenuItems().subscribe(
												data =>	{
														this.logo = data.logo;
														this.menuItems = data.items;
														this.selectedItem = this.menuItems[0].title;
													});
	}

	selectMenuItem(item) {
		this.selectedItem = item.title;
	}
	
	close() {
		this.isOpenChange.emit(false);
		this.isOpen = false;
	}

} 