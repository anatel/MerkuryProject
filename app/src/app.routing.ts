import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } 				from './components/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'}, // redirect to home page on load
	{ path: '**', component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);