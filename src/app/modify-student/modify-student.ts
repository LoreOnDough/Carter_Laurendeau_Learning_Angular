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

  onSubmit() {

  }
}
