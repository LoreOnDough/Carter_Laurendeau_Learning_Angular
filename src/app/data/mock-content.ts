import {User} from '../models/user';

let user1: User = {id:1, firstName: "Brendon", lastName:"Shaw", favouriteClass:"Java", isStudent: true};
let user2: User = {id:2, firstName:"Nancy",lastName:"Miles",favouriteClass:"Python", isStudent: false};
let user3: User = {id:3, firstName:"Katrina", lastName:"Blankenship", favouriteClass:"Javascript", isStudent: true};
let user4: User = {id:4, firstName:"Owen", lastName:"Craig", favouriteClass:"HTML", isStudent: true};
let user5: User = {id:5, firstName:"Brian", lastName:"Gallagher", favouriteClass:"Python", isStudent: false};
let user6: User = {id:6, firstName:"Blake", lastName:"Bass", favouriteClass:"Java", isStudent: false};
export const userList: User[] = [user1, user2, user3, user4, user5, user6];
