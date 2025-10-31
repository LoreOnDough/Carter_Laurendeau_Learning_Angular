import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-modify-student',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-student.html',
  styleUrl: './modify-student.css'
})
export class ModifyStudent {
  studentForm: FormGroup | undefined;

  onSubmit(): void {
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
