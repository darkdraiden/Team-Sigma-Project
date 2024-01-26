import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  
  // bookId  :any
  // sellerId : any

  constructor(private route: ActivatedRoute ,private router: Router, private http :HttpClient) {
    // Retrieve the 'bookId' and 'sellerId' parameters from the route
    this.route.params.subscribe(params => {
      // this.bookId = params['bookId'];
      // this.sellerId = params['sellerId'];
      // Now 'bookId' and 'sellerId' contain the values passed from the previous page
    });
  }
  books : any = {
    bookId : "",
    sellerId : "",
    bookName: "",
    bookDescription :"",
    genre : "",
    author :"",
    quantity :"",
    price : "",
    image : ""
  }
  updateBook()
  {
    console.log("update book")
    // bookName:this.books.bookName;
    const jwtToken = localStorage.getItem('loginToken'); // Replace with your actual key
    if (!jwtToken) {
      // Handle the case when the token is not available
      alert('JWT token not found in local storage');
      return;
    }
    this.books.sellerId = localStorage.getItem('email')
    // Set the JWT token in the request headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    console.log(headers)
    
    console.log("aupdate", this.books )
     return this.http.put(`http://localhost:8081/home/sell/update`, this.books, { headers })
      .subscribe(
        (res: any) => {

          alert( res.message);
          this.router.navigate(['/sellerbooks']);
        },
        (error: any) => {
          alert(error);
          // this.router.navigate(['/']);
        }
      );
  }
}
