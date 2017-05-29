import { Component, Input } from '@angular/core';
import { Message } 					from '../../../models/message';

@Component({
    selector: 'message',
    templateUrl: './app/src/components/list/message/message.component.html',
		styleUrls: ['./app/src/components/list/message/message.component.css'],
})
export class MessageComponent {
		@Input() message: Message;
}