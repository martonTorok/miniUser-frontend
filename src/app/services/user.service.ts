import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>("http://localhost:3000/users");
  }

  createUser(UserName: string, UserEmail: string) {
      return this.http.post<User>("http://localhost:3000/users/create", {UserName, UserEmail});
  }

  deleteUser(id: number) {
    return this.http.delete<any>(`http://localhost:3000/users/delete/${id}`);
  }
}
