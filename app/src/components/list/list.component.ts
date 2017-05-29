import { Component, Input } from '@angular/core';
import { ListItem } from '../../models/list-item';
import { Task } from '../../models/task/task';
import { Message } from '../../models/message/message';
import { Activity } from '../../models/activity/activity';
  
@Component({
    selector: 'list',
    templateUrl: './app/src/components/list/list.component.html',
		styleUrls: ['./app/src/components/list/list.component.css']
})
export class ListComponent {
	@Input() listItems: ListItem[];
	@Input() listTitle: string;
	@Input() type: string;
	@Input() limit: number;

	 countUnreadMessages() {
		 return this.listItems.filter(function(item) {
			 return item.read === false;
		 }).length;
	 }
	 
	 countDelayedTasks() {
		 return this.listItems.filter(function(item) {
			 return item.days > 0;
		 }).length;
	 }
}