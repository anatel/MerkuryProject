import { Component, Input } from '@angular/core';
import { Activity } 				from '../../../models/activity';

@Component({
    selector: 'activity',
    templateUrl: './app/src/components/list/activity/activity.component.html',
		styleUrls: ['./app/src/components/list/activity/activity.component.css'],
})
export class ActivityComponent {

		@Input() activity: Activity;
		
}