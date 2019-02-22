import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user.model";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService,
    private snackbar: MatSnackBar
  ) {}

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

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(
      res => {
        this.getUser();
        this.snackbar.openFromComponent(DeleteSuccessfulComponent, {
          duration: 3000
        });
      },
      err => {
        this.snackbar.openFromComponent(DeleteUnSuccessfulComponent, {
          duration: 3000
        });
        console.log(err);
      }
    );
  }
}

@Component({
  selector: "delete-successful-component",
  template: `
    <span class="deleteSuccessful">
      Deleted user succesfully!
    </span>
  `,
  styles: [
    `
      .deleteSuccessful {
        font-size: 1em;
      }
    `
  ]
})
export class DeleteSuccessfulComponent {}

@Component({
  selector: "delete-unsuccessful-component",
  template: `
    <span class="deleteSuccessful">
      Deleting user was unsuccesful! Please try again.
    </span>
  `,
  styles: [
    `
      .deleteSuccessful {
        font-size: 1em;
        color: red;
      }
    `
  ]
})
export class DeleteUnSuccessfulComponent {}
