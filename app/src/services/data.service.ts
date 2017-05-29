import { Injectable }			from '@angular/core';
import { Http, Response }	from '@angular/http';
import { Observable } 		from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {
	
	private const DB_PREFIX = 'database/';
	constructor(private http: Http) {}
	
	getMenuItems() {
		return this.getDataFromServer(this.DB_PREFIX + 'menuItems.json');
	}
	
	getCurrentUser() {
		return this.getDataFromServer(this.DB_PREFIX + 'user.json');
	}
	
	getMessages() {
		return this.getDataFromServer(this.DB_PREFIX + 'messages.json');
	}
	
	getActivities() {
		return this.getDataFromServer(this.DB_PREFIX + 'activities.json');
	}
	
	getTasks() {
		return this.getDataFromServer(this.DB_PREFIX + 'tasks.json');
	}
	
	getNotifications() {
		return this.getDataFromServer(this.DB_PREFIX + 'notifications.json');
	}
	
	getDataFromServer(url: string) {
		return this.http.get(url)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}