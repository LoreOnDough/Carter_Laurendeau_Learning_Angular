import { Injectable } from '@angular/core';
import {User} from './models/user';
import {userList} from './data/mock-content';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: User[] = userList;//Local copy of student data for CRUD Operations
  constructor() { }
  //Returns all students
  getStudents(): Observable<User[]>{
    return of(userList); //Return and observable that emits mock student data
  }
}
