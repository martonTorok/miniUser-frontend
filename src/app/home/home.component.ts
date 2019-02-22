import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  adminName = new FormControl("", [Validators.required]);
  adminPassword = new FormControl("", [Validators.required]);

  constructor(
    private router: Router,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      adminName: this.adminName,
      adminPassword: this.adminPassword
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .loginAdmin(this.adminName.value, this.adminPassword.value)
        .subscribe(
          data => {
            this.router.navigate(["/users"]);
          },
          error => {
            this.adminName.reset();
            this.adminPassword.reset();
            this.snackbar.openFromComponent(InvalidCredentialsComponent, {
              duration: 3000
            });
            console.log(error);
          }
        );
    }
  }

  getNameErrorMessage() {
    return this.adminName.hasError("required") ? "Name is required." : "";
  }

  getPasswordErrorMessage() {
    return this.adminPassword.hasError("required")
      ? "Password is required."
      : "";
  }
}

@Component({
  selector: "invalid-credentials-component",
  template: `
    <span class="invalidCredentials">
      Name or password is wrong. Please try again.
    </span>
  `,
  styles: [
    `
      .invalidCredentials {
        color: #e52727;
        font-size: 0.8em;
      }
    `
  ]
})
export class InvalidCredentialsComponent {}
