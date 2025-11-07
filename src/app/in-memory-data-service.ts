import { Injectable } from '@angular/core';
import {User} from './models/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb():{students: User[]} {
    /*
    Inside the method, a constant array named students is defined,
    containing several User objects. Each User object represents a
    student with properties such as id, firstName, lastName,
     department, and isAdmin. For example, one of the User objects is
     */
    const students: User[] = [
      {id:1, firstName: "Brendon", lastName:"Shaw", favouriteClass:"Java", isStudent: true},
      {id:2, firstName:"Nancy",lastName:"Miles",favouriteClass:"Python", isStudent: false},
      {id:3, firstName:"Katrina", lastName:"Blankenship", favouriteClass:"Javascript", isStudent: true},
      {id:4, firstName:"Owen", lastName:"Craig", favouriteClass:"HTML", isStudent: true},
      {id:5, firstName:"Brian", lastName:"Gallagher", favouriteClass:"Python", isStudent: false},
      {id:6, firstName:"Blake", lastName:"Bass", favouriteClass:"Java", isStudent: false}
    ];
    return { students };
  }
}
