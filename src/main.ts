import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {Routes} from '@angular/router';
import {StudentListItem} from './app/student-list-item/studend-list-item';

const routes: Routes = [
  {path:'', redirectTo: '/students', pathMatch: 'full'}, //default route
  { path: 'students', component: StudentListItem },
  { path: 'students/:id', component: StudentListItem },

];

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
