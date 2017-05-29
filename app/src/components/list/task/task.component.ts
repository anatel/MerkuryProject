import { Component, Input } from '@angular/core';
import { Task } from '../../../models/task';

@Component({
    selector: 'task',
    templateUrl: `./app/src/components/list/task/task.component.html`,
		styleUrls: ['./app/src/components/list/task/task.component.css'],
})
export class TaskComponent {
		@Input() task: Task;
}