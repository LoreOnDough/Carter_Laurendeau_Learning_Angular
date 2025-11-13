import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {NgClass, NgForOf} from '@angular/common';
import {StudendListItem} from '../student-list-item/studend-list-item';
import {StudentService} from '../student-service';

@Component({
  selector: 'app-student-list',
  imports: [NgForOf, StudendListItem, NgClass],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit{
  identifier:string[] = ['id', 'firstName', 'lastName', 'favouriteClass', 'isStudent'];
  userList: User[] | undefined = [];
  constructor(private studentService:StudentService) {
  }
  ngOnInit(){
    //This lifecycle hook is a good place to fetch and init our data
    this.studentService.getStudents().subscribe({
      next: (data: User[]) => this.userList = data,
      error:err => console.error("Error fetching Students", err),
      complete:() => console.log("Student data fetch complete!")
    })

  }
}
