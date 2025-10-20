import {Component, Input, input} from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'app-student-list-item',
  imports: [],
  templateUrl: './studend-list-item.html',
  styleUrl: './studend-list-item.css'
})
export class StudentListItem {
 @Input()? item:User;
}
