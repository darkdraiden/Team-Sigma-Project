import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./MyComponents/login/login.component";
import { SignupComponent } from "./MyComponents/signup/signup.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, LoginComponent, SignupComponent, HttpClientModule, FormsModule, NgIf]
})
export class AppComponent {
  title = 'BookApp';
  isTokenExist(): boolean {
    if (typeof localStorage !== 'undefined') {
      const jwtToken = localStorage.getItem('loginToken');
      return !!jwtToken; // Return true if the token exists, false otherwise
    } else {
      return false; // localStorage is not defined, handle accordingly
    }
  }
  logout()
  {
    localStorage.removeItem('loginToken');
  }
}
