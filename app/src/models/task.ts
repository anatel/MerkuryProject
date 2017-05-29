import { ListItem } from './list-item';

export class Task extends ListItem{
	title: string;
	days: number; //can be positive or negative to indicate if delay or pending
}