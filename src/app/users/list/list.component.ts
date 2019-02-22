import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/auth/user.service";
import { User } from "src/app/models/user.model";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      },
      err => {
        console.log(err);
      }
    );
  }
}
