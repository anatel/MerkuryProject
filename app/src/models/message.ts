import { ListItem } from './list-item';
	
export class Message extends ListItem{
	sender: string;
	senderImg: string;
	text: string;
	time: Date;
	read: boolean;
}