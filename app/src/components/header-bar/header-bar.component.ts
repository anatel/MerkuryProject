import { Component, Input, Output, EventEmitter }	from '@angular/core';
import { DataService } from '../../services/data.service';
import { Notification } from '../../../models/notification';

@Component({
	selector: 'header-bar',
	templateUrl: './app/src/components/header-bar/header-bar.component.html',
	styleUrls: ['./app/src/components/header-bar/header-bar.component.css']
})
export class HeaderBarComponent {
	
	@Output() toggleMenu: EventEmitter<string> = new EventEmitter<string>();
	@Input() 	isMenuOpen: boolean;
	userData: any;
	notifications: Notification[];
	
	constructor(private dataService: DataService){}
	
	ngOnInit() {
		this.getData();
	}
	
	getData() {
		this.dataService.getCurrentUser().subscribe(
												user =>	{
														this.userData = user;
													});
		this.dataService.getNotifications().subscribe(
												notifications =>	{
														this.notifications = notifications;
													});
	}
	
	countNewNotifications() {
		return this.notifications.filter(function(item) {
		 return item.read === false;
		}).length;
	}
	 
	onMenuClick($event) {
		this.toggleMenu.emit("Menu Clicked");
		$event.preventDefault();
	}
	 
} 