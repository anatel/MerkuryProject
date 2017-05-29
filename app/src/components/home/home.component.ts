import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ListItem } from '../../models/list/list-item';

@Component({
    selector: 'app-home',
    templateUrl: './app/src/components/home/home.component.html',
		styleUrls: ['./app/src/components/home/home.component.css']
})
export class HomeComponent {
		firstName: string;
		tasks: ListItem[];
		messages: ListItem[];
		activities: ListItem[];

    constructor(private dataService: DataService){}

		ngOnInit() {
			this.getUser();
			this.getLists();
		}

		getUser() {
			this.dataService.getCurrentUser().subscribe(
												user =>	{
														this.firstName = user.firstName;
													});
		}
		
		getLists() {
			this.dataService.getTasks().subscribe(
												tasks =>	{
														this.tasks = tasks;
													});
			this.dataService.getMessages().subscribe(
												messages =>	{
														this.messages = messages;
														this.generateDates(this.messages, "time");
													});
			this.dataService.getActivities().subscribe(
												activities =>	{
														this.activities = activities;
														this.generateDates(this.activities, "time");
													});
		}

		generateDates(list: ListItem[], dateProp: string) {
			list.forEach(function(item) {
				item[dateProp] = new Date(item[dateProp]);
			});
		}
}