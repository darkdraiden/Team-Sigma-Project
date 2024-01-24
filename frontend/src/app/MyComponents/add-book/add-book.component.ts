import { Component, NgModule } from '@angular/core';
import { Book } from "../../Book";
import { FormsModule,  } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { error } from 'node:console';
@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [FormsModule, HttpClientModule,],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
  books : any = {
    bookId : 300, 
    sellerId : 700,
    bookName: "",
    bookDescription :"",
    genre : "",
    author :"",
    quantity :"",
    price : ""
  }
  constructor(private http :HttpClient)
  {
      
  }

  addBook()
  {
    bookName:this.books.bookName;
    console.log("addbook", this.books.bookName, this.books.author )
    const jwtToken = localStorage.getItem('loginToken'); // Replace with your actual key

    if (!jwtToken) {
      // Handle the case when the token is not available
      alert('JWT token not found in local storage');
      return;
    }

    // Set the JWT token in the request headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    ///adduser user service
    // this.http.post(`http://localhost:8081/home/create-book`, this.books,
    // {headers}).subscribe(
    //   (res: any) => {

    //     alert("Book added");


    //   },
    //   (error) => {

    //       alert(error+"this is the error");

    //   }
    // );
    this.http.post(`http://localhost:8081/home/create-book`, this.books, { headers })
      .subscribe(
        (res: any) => {
          alert(res.message);
        },
        (error) => {
          alert(error.message);
        }
      );

  }
  
}
