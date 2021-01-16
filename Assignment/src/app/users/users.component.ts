import { Component, OnInit } from '@angular/core';
import { User } from './models/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  myusers: User[] = [
    {
      name: 'Divyanshu Goel',
      username: 'divyanshu',
      email: 'divyanshu.goel@nagarro.com',
    },
    {
      name: 'Govind Jain',
      username: 'govjain',
      email: 'govind.jain@nagarro.com',
    },
    {
      name: 'Kushagara Gupta',
      username: 'kgupta',
      email: 'kushagara.gupta@nagarro.com',
    },
    {
      name: 'Nishant Verma',
      username: 'nishant',
      email: 'nishant.verma@nagarro.com',
    },
  ];

  constructor() {
    for(let u of this.myusers){
      this.users.push(u)
    }
  }


  ngOnInit(): void {
  }

}
