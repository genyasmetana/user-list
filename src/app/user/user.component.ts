import { Component, OnInit } from '@angular/core';
import { UserService }       from "./user.service";
import { IUsers }            from "./user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  _users: IUsers;

  constructor (private _userService: UserService) {}

  getUsers(): void {
    this._userService.getUsers().subscribe(
      resultUsers => {
        this._users = resultUsers;
        console.log(resultUsers);
      },
          error => console.log("Error" + error)
    )
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
