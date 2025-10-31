import {Component, Input, input} from '@angular/core';
import {User} from '../models/user';
import {userList} from '../data/mock-content';

@Component({
  selector: 'app-student-list-item',
  imports: [],
  templateUrl: './studend-list-item.html',
  styleUrl: './studend-list-item.css'
})
export class StudentListItem {
 @Input() item?: User | undefined;
  currentIndex: number;

  goBackward() {

  }

  goForward() {

  }

  goBack() {

  }

  protected readonly userList = userList;
}
