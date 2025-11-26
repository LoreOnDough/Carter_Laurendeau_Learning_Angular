import {Component, OnInit} from '@angular/core';
import {User} from '../models/user';
import {NgClass, NgForOf} from '@angular/common';
import {StudendListItem} from '../student-list-item/studend-list-item';
import {StudentService} from '../student-service';
import {HoverHighlightDirective} from '../hover-highlight.directive';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';
import {MatDivider} from '@angular/material/divider';
import {MatRipple, MatRippleModule} from '@angular/material/core';

@Component({
  selector: 'app-student-list',
  imports: [NgForOf, StudendListItem, NgClass, MatButton, MatDivider, MatRipple],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit{
  identifier:string[] = ['id', 'firstName', 'lastName', 'favouriteClass', 'isStudent'];
  userList: User[] | undefined = [];
  //private router: any;
  color = "magenta"
  constructor(private studentService:StudentService, private router: Router) {

  }
  ngOnInit(){
    //This lifecycle hook is a good place to fetch and init our data
    this.studentService.getStudents().subscribe({
      next: (data: User[]) => this.userList = data,
      error:err => console.error("Error fetching Students", err),
      complete:() => console.log("Student data fetch complete!")
    })

  }
  goToModify(): void {
    this.router.navigate(['/modify-student']);
  }
}
