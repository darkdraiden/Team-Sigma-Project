import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  bookIdcome :any

  constructor(private route: ActivatedRoute ,private router: Router, private http :HttpClient) {
    // Retrieve the 'bookId' and 'sellerId' parameters from the route
    this.route.queryParams.subscribe(params => {
      this.bookIdcome = params['bookId'];
      // Now you can use the bookId in this component
      console.log(this.bookIdcome + " 12121dsfsfdsf");
    });
    this.books.bookId = this.bookIdcome
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
  toster = inject(ToastrService)

  

  updateBook()
  {
    console.log("update book")
    // bookName:this.books.bookName;
    const jwtToken = localStorage.getItem('loginToken'); // Replace with your actual key
    if (!jwtToken) {
      // Handle the case when the token is not available
      this.toster.error("JWT token not found in local storage","Error")

      // alert('JWT token not found in local storage');
      return;
    }
    this.books.sellerId = localStorage.getItem('email')
    // Set the JWT token in the request headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    // console.log(book.bookId +"d1212121asddad")
    
    console.log("aupdate", this.books )
     return this.http.put(`http://localhost:8081/home/sell/update`, this.books, { headers })
      .subscribe(
        (res: any) => {

          this.toster.success("Book updated!", "Success")
          this.router.navigate(['/sellerbooks']);
        },
        (error: any) => {
          alert(error);
          this.toster.error("error","Error")

          // this.router.navigate(['/']);
        }
      );
  }
}
