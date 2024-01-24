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
    bookId : "", 
    sellerId : "",
    bookName: "",
    bookDescription :"",
    genre : "",
    author :"",
    quantity :"",
    price : ""
  }
  router: any;
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

    this.http.post(`http://localhost:8081/home/create-book`, this.books, { headers })
      .subscribe(
        (res: any) => {
          alert("book added");
          this.router.navigate(['/']);
        },
        (error) => {
          alert(error.message);
          // this.router.navigate(['/']);
        }
      );

  }
  
}
