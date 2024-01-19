import { Routes } from '@angular/router';
import { LoginComponent } from "./MyComponents/login/login.component";
import { SignupComponent } from "./MyComponents/signup/signup.component";
import { BooksComponent } from './MyComponents/books/books.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: BooksComponent },
    { path: 'signup', component: SignupComponent},
  ];

export const routes: Routes = appRoutes;
