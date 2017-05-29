import { ListItem } from './list-item';

export class Activity extends ListItem{
	doer: string;
	action: string;
	subject: string;
	doerImg: string;
	time: Date;
}