import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  UserName = new FormControl("", [Validators.required]);
  UserEmail = new FormControl("", [Validators.required, Validators.email]);

  constructor(private userervice: UserService, private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      UserName: this.UserName,
      UserEmail: this.UserEmail
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.userervice
        .createUser(this.UserName.value, this.UserEmail.value)
        .subscribe(
          res => {
            this.snackbar.openFromComponent(RegistrationSuccessfulComponent, {
              duration: 3000
            });
          },
          err => {
            this.snackbar.openFromComponent(RegistrationUnSuccessfulComponent, {
              duration: 3000
            });
          }
        );

      setTimeout(() => {
        this.UserEmail.reset();
        this.UserName.reset();
      }, 1000);
    }
  }

  getNameErrorMessage() {
    return this.UserName.hasError("required") ? "Name is required." : "";
  }

  getEmailErrorMessage() {
    return this.UserEmail.hasError("required")
      ? "Email is required."
      : this.UserEmail.hasError("email")
      ? "Not a valid email."
      : "";
  }
}

@Component({
  selector: "registration-successful-component",
  template: `
    <span class="registrationSuccessful">
      Registered User succesfully!
    </span>
  `,
  styles: [
    `
      .registrationSuccessful {
        font-size: 1em;
      }
    `
  ]
})
export class RegistrationSuccessfulComponent {}

@Component({
  selector: "registration-unsuccessful-component",
  template: `
    <span class="registrationUnSuccessful">
      Registering user was unsuccessful! Please try again.
    </span>
  `,
  styles: [
    `
      .registrationUnSuccessful {
        font-size: 1em;
        color: red;
      }
    `
  ]
})
export class RegistrationUnSuccessfulComponent {}
