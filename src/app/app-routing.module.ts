import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./users/list/list.component";
import { RegisterComponent } from "./users/register/register.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "users", component: ListComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
