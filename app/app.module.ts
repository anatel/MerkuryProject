import { NgModule }      						from '@angular/core';
import { HttpModule }								from '@angular/http';
import { MomentModule }							from 'angular2-moment';
import { BrowserModule } 						from '@angular/platform-browser';
import { DataService } 							from './src/services/data.service';
import { AppComponent }  						from './src/app.component';
import { SideMenuComponent } 				from './src/components/side-menu/side-menu.component';
import { HeaderBarComponent } 		 	from './src/components/header-bar/header-bar.component';
import { CircleDropDownComponent } 	from './src/components/circle-drop-down/circle-drop-down.component';
import { CircleComponent }					from './src/components/circle/circle.component';
import { ListComponent }						from './src/components/list/list.component';
import { TaskComponent }						from './src/components/list/task/task.component';
import { MessageComponent } 				from './src/components/list/message/message.component';
import { ActivityComponent }				from './src/components/list/activity/activity.component';
import { HomeComponent } 						from './src/components/home/home.component';
import { routing }  								from './src/app.routing';
import { FirstLetterPipe } 					from './src/pipes/first-letter.pipe';
import { AbsoluteValPipe } 					from './src/pipes/absolute-val.pipe';
import { TruncatePipe }							from './src/pipes/truncate.pipe';

  
@NgModule({
    imports:      [ BrowserModule, routing, MomentModule, HttpModule ],
    declarations: [ AppComponent, SideMenuComponent, HeaderBarComponent, CircleDropDownComponent, HomeComponent, CircleComponent, ListComponent, TaskComponent, 
									 MessageComponent, ActivityComponent,	FirstLetterPipe,	AbsoluteValPipe, TruncatePipe ],
    bootstrap:    [ AppComponent ],
		providers: 		[ DataService ]
})
export class AppModule { }