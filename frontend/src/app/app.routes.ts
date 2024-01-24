import { Routes } from '@angular/router';
import { LoginComponent } from "./MyComponents/login/login.component";
import { SignupComponent } from "./MyComponents/signup/signup.component";
import { BooksComponent } from './MyComponents/books/books.component';
import { AddBookComponent } from './MyComponents/add-book/add-book.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: BooksComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'addbook', component: AddBookComponent},
  ];

export const routes: Routes = appRoutes;
