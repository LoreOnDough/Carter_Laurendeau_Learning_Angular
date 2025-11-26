import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from '../models/user';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentService} from '../student-service';
import {NgIf} from '@angular/common';
import {AutoFocusDirective} from '../auto-focus.directive';
import {MatFormField, MatLabel} from '@angular/material/form-field';
//import {MatLabel} from '@angular/material/form-field-module';
import {MatInput} from '@angular/material/input';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-modify-student',
  imports: [
    ReactiveFormsModule,
    NgIf,
    AutoFocusDirective,
    MatFormField,
    MatLabel,
    MatInput,
    MatCheckbox,
    MatButton,
    MatTooltip
  ],
  templateUrl: './modify-student.html',
  styleUrl: './modify-student.css'
})
export class ModifyStudent implements OnInit{

  studentForm: FormGroup;
  //private router: any;
  //private studentService: any;
  student: User | undefined;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      //Auto filling the ID field with a new ID
      id: [studentService.generateNewId()], //ID is NOT required
      firstName: ['', Validators.required],//First name is required
      lastName: ['', Validators.required],
      favouriteClass: [''],
      isStudent: [false]
    });
  }

  ngOnInit(): void {
    // first we retreive the student ID from the route parameters using the ActivatedRoute service
    //the paramMap.get('id') method extracts the 'id' parameter from the route, and Number()
    // converts it to a numeric value. This ID is then used to fetch the student's details.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      //if the ID is valid, the StudentService is used to fetch the student's details by calling the getStudentById method
      this.studentService.getStudentById(id).subscribe( {
        next: student => {
          if (student) {
            //If the student object is valid, the patchValue method of the reactive form
            // (studentForm) is called to populate the form with the student's data The patchValue method updates the form controls with the
            // values from the student object without resetting the entire form
            this.studentForm.patchValue(student);
          }
        },
        error: err => {
          this.error = 'Error fetching student';
          console.error('Error fetching student:', err);
        }
      });
    }
  }

  onSubmit(): void {
    // @ts-ignore
    const student: User = this.studentForm.value;

    // Check if we're updating an existing student
    if (student.id) {
      this.studentService.updateStudent(student);
    } else {
      // For adding a new student, generate a new ID
      const newId = this.studentService.generateNewId(); // This method will create a new ID
      student.id = newId;
      this.studentService.addStudent(student);
    }

    this.router.navigate(['/students']);
  }

  onDelete(): void {
    // @ts-ignore
    const id = this.studentForm.get('id')?.value;
    if (id) {
      this.studentService.deleteStudent(id);
      this.router.navigate(['/students']);
    }
  }

  navigateToStudentList(): void {
    this.router.navigate(['/students']);
  }
}
