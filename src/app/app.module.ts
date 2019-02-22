import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";

import { MatSnackBarModule } from "@angular/material/snack-bar";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  HomeComponent,
  InvalidCredentialsComponent
} from "./home/home.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { AuthService } from "./auth/auth.service";
import { UserService } from "./auth/user.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ListComponent } from "./users/list/list.component";
import { RegisterComponent } from "./users/register/register.component";
import { AddheaderinterceptorService } from "./auth/addheaderinterceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    InvalidCredentialsComponent,
    ListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [
    AuthService,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddheaderinterceptorService,
      multi: true
    }
  ],
  entryComponents: [InvalidCredentialsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
