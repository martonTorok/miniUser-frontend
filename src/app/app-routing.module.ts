import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListComponent } from "./users/list/list.component";
import { RegisterComponent } from "./users/register/register.component";
import { AuthGuardService } from "./services/authguard.service";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "users", component: ListComponent, canActivate: [AuthGuardService] },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
