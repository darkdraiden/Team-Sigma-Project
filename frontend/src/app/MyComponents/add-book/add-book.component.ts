import { Component, NgModule } from '@angular/core';
import { Book } from "../../Book";
import { FormsModule,  } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
    sellerId : '',
    bookName: '',
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
    
    console.log("addbook", this.books.name, this.books.author )

    ///adduser user service
    this.http.post(`http://localhost:8081/auth/login`, this.books).subscribe(
      (res: any) => {
        console.log(res.token);
        if (res.token) {
          alert("Book added");

        } else {
          alert("Something went wrong");
        }
      },
      (error) => {
        // Handle errors here
        if (error.status === 401) {
          alert(error);
        } else {
          alert("Something went wrong");
        }
      }
    );

  }
  
}
