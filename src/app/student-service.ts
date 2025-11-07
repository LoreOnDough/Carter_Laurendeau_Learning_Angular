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

  addStudent(newStudent:User) : Observable<User[]>{
    this.students.push(newStudent)
    return of(this.students);
  }

  //Update an Existing user
  updateStudent(updatedStudent: User): Observable<User[]> {
    const index = this.students.findIndex(user => user.id === updatedStudent.id);
    if (index !== -1) {
      this.students[index] = updatedStudent;
    }
    return of(this.students);
  }
  //Delete: Remove a user by ID
  deleteStudent(studentId: number): Observable<User[]> {
    this.students = this.students.filter(user => user.id !== studentId);
    return of(this.students);
  }
  getStudentById(studentId: number): Observable<User | undefined> {
    const student = this.students.find(user => user.id === studentId);
    return of(student);
  }

  generateNewId(): number {
    return this.students.length > 0 ? Math.max(...this.students.map(student => student.id)) + 1 : 1;
  }
}
