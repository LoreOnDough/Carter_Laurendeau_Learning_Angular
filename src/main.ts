import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {Routes} from '@angular/router';
import {StudendListItem} from './app/student-list-item/studend-list-item';
import {PageNotFound} from './app/page-not-found/page-not-found';
import {ModifyStudent} from './app/modify-student/modify-student';

const routes: Routes = [
  {path:'', redirectTo: '/students', pathMatch: 'full'}, //default route
  { path: 'students', component: StudendListItem },
  { path: 'students/:id', component: StudendListItem },
  {path:'modify-student', component: ModifyStudent},
  {path: '**', component: PageNotFound}//Wildcard route for a 404 page

];

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
