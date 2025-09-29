import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from './models/user';
import {NgForOf, NgSwitch, NgSwitchCase} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    NgForOf,
    NgSwitch,
    NgSwitchCase
  ],
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Assignment1');
  name = "Carter"
  age = 19
  selectedOption: string = 'name';
  user1: User = {id:1, firstName: "Brendon", lastName:"Shaw", favouriteClass:"Java", isStudent: true};
  user2: User = {id:2, firstName:"Nancy",lastName:"Miles",favouriteClass:"Python", isStudent: false};
  user3: User = {id:3, firstName:"Katrina", lastName:"Blankenship", favouriteClass:"Javascript", isStudent: true};
  user4: User = {id:4, firstName:"Owen", lastName:"Craig", favouriteClass:"HTML", isStudent: true};
  user5: User = {id:5, firstName:"Brian", lastName:"Gallagher", favouriteClass:"Python", isStudent: false};
  user6: User = {id:6, firstName:"Blake", lastName:"Bass", favouriteClass:"Java", isStudent: false};
  userList: User[] = [this.user1, this.user2, this.user3, this.user4, this.user5, this.user6];

}
