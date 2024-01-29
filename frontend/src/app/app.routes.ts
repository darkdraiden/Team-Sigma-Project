import { Routes } from '@angular/router';
import { LoginComponent } from "./MyComponents/login/login.component";
import { SignupComponent } from "./MyComponents/signup/signup.component";
import { BooksComponent } from './MyComponents/books/books.component';
import { AddBookComponent } from './MyComponents/add-book/add-book.component';
import { SellerBookComponent } from "./MyComponents/seller-book/seller-book.component";
import { BooksItemComponent } from "./MyComponents/books-item/books-item.component";
import { UpdateBookComponent } from "../app/MyComponents/update-book/update-book.component";
import { BuyBookComponent } from "../app/MyComponents/buy-book/buy-book.component";
import { MybooksComponent } from "../app/MyComponents/mybooks/mybooks.component";
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: BooksComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'addbook', component: AddBookComponent},
    { path: 'sellerbooks', component: SellerBookComponent},
    { path: 'bookitem', component: BooksItemComponent},
    { path: 'updatebook', component: UpdateBookComponent},
    { path: 'mypurchase', component: MybooksComponent}
  ];

export const routes: Routes = appRoutes;
