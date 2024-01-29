import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller-book',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './seller-book.component.html',
  styleUrl: './seller-book.component.css'
})
export class SellerBookComponent implements OnInit {
  books : any
  id: string  | null = null;
  jwtToken: string | null | undefined;
  constructor(private http :HttpClient ,private router: Router)
  {
    
  }
  toster = inject(ToastrService)


  ngOnInit()
  {
    if (typeof window !== 'undefined' && window.localStorage)
    this.id = localStorage.getItem("email")
    if (typeof window !== 'undefined' && window.localStorage)
    this.jwtToken = localStorage.getItem('loginToken'); // Replace with your actual key
    if (!this.jwtToken) {
      // Handle the case when the token is not available
      // this.toster.error("Login First","Error")

      // alert('JWT token not found in local storage');
      return;
    }
  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);

    if (this.id !== null && this.id) {
      let response = this.http.get(`http://localhost:8081/home/sell/showBooksBy/${this.id}`,{ headers });
      console.log('on seller books');

      response.subscribe((data) => {
        console.log('Received data:', data);

        this.books = data;
      });
    } 
  }


  deleteClick(bookId :any)
  {

    const jwtToken = localStorage.getItem('loginToken'); 
    const email = localStorage.getItem('email');
    if (!jwtToken) {
      this.toster.error("JWT token not found in local storage","Error")

      // alert('JWT token not found in local storage');
      return;
    }
    else if(!email)
    {
      this.toster.error("This is not seller account","Error")
      return;
    }
    
    // Set the JWT token in the request headers
    const obj = {
      bookId : bookId,
      sellerId : email
    }
    // console.log(obj)
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    this.http.delete(`http://localhost:8081/home/sell/delete`, {
      headers: headers,
      body: obj

    })
      .subscribe(
        (res: any) => {
          this.toster.success("Book deleted", "Success")

          // alert("book deleted");
          // this.router.navigate(['/sellerbooks']);
          window.location.reload();
        },
        (error) => {
          this.toster.error("cant delete this book","Error")

          // alert("cant delete this book" +error.message);
          // this.router.navigate(['/']);
        }
      );

  }

  navigateToAddBook() {
    this.router.navigate(['/addbook']);
  }

  buyClick(book: any) {
    console.log('buy click');
    // Navigate to 'bookitem' page and pass the book data as a parameter
    if (book) {
      // Navigate to 'bookitem' page and pass the book data as a parameter
      this.router.navigate(['/bookitem', { bookData: JSON.stringify(book) }]
      ,
      {
        skipLocationChange: true,
      }
      );
    } else {
      console.error('Book data is undefined');
    }  
  }

  updateClick(bookId :any)
  {

      const foundBook = this.books.find((book: any) => book.bookId === bookId);

      const navigationExtras: NavigationExtras = {
        queryParams: {
          bookId: bookId,
          bookName : foundBook.bookName,
          bookDesc : foundBook.bookDescription,
          bookG : foundBook.genre,
          bookA : foundBook.author,
          bookQ : foundBook.quantity,
          bookP : foundBook.price,
          bookI : foundBook.image
          
        }
      };
      // console.log( foundBook. +"sadas")
      this.router.navigate(['/updatebook'], navigationExtras,
      );
      
  }
}
