import {Component, Input, input} from '@angular/core';
import {User} from '../models/user';
import {userList} from '../data/mock-content';

@Component({
  selector: 'app-student-list-item',
  imports: [],
  templateUrl: './studend-list-item.html',
  styleUrl: './studend-list-item.css',
  standalone:true
})


export class StudentListItem {
  private router: any;
  @Input() item?: User | undefined;
  currentIndex: number | undefined;

  //function to go back to student-list view
  goBack(): void {
    this.router.navigate(['/students']);
  }

//function to move foward through array with overflow protection
  goForward(): void {
    // @ts-ignore
    if (this.currentIndex < this.userList.length - 1) {
      // @ts-ignore
      this.currentIndex++;
      // @ts-ignore
      this.router.navigate(['/students', this.userList[this.currentIndex].id]);
    }
  }
//function to move backward through array with overflow protection
  goBackward(): void {
    // @ts-ignore
    if (this.currentIndex > 0) {
      // @ts-ignore
      this.currentIndex--;
      // @ts-ignore
      this.router.navigate(['/students', this.userList[this.currentIndex].id]);
    }
  }
  protected readonly userList = userList;
}
