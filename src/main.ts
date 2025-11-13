import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {Routes} from '@angular/router';
import {StudendListItem} from './app/student-list-item/studend-list-item';
import {PageNotFound} from './app/page-not-found/page-not-found';
import {ModifyStudent} from './app/modify-student/modify-student';
import {StudentList} from './app/student-list/student-list';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' }, //Default route
  { path: 'students', component: StudentList },     //eagerly loaded
  { path: 'students/:id',
    loadComponent: () =>
      import('./app/student-list-item/studend-list-item').then(m => m.StudendListItem) }, //Lazy Loaded
  { path: 'modify-student',
    loadComponent: () =>
      import('./app/modify-student/modify-student').then(m => m.ModifyStudent) },
  { path: '**',
    loadComponent: () =>
      import('./app/page-not-found/page-not-found').then(m => m.PageNotFound) },
];
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
