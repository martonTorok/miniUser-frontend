import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginAdmin(name: string, password: string): Observable<boolean> {
    return this.http
      .post<{ token: string }>("http://localhost:3000/admin/login", {
        adminName: name,
        adminPassword: password
      })
      .pipe(
        map(result => {
          localStorage.setItem("access_token", result.token);
          return true;
        })
      );
  }

  isAuthenticated(): boolean {
    return localStorage.getItem("access_token") !== null;
  }

  logoutUser() {
    localStorage.removeItem("access_token");
    window.location.reload();
  }
}
