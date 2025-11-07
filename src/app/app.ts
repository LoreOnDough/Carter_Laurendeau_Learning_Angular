import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from './models/user';
import {NgForOf, NgSwitch, NgSwitchCase} from '@angular/common';
import {StudentList} from './student-list/student-list';
import {StudentListItem} from './student-list-item/studend-list-item';
import {StudentService} from './student-service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    StudentList
  ],
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('Assignment4');
  constructor(private studentService: StudentService) {
  }
  user: Observable<User | undefined> | undefined;
  ngOnInit(){
    this.user = this.studentService.getStudentById(0);
  }
}
