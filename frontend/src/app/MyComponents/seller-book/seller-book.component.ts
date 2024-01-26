import { NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private http :HttpClient ,private router: Router)
  {
    
  }

  ngOnInit()
  {
    if (typeof window !== 'undefined' && window.localStorage)
    this.id = localStorage.getItem("email")
    if (this.id !== null) {
      let response = this.http.get('http://localhost:8081/books');
      console.log('on seller books');

      response.subscribe((data) => {
        this.books = data;
      });
    } 
  }


  deleteClick()
  {

    const jwtToken = localStorage.getItem('loginToken'); 
    const email = localStorage.getItem('email');
    if (!jwtToken) {
      
      alert('JWT token not found in local storage');
      return;
    }
    else if(!email)
    {
      alert('This is not seller account');
      return;
    }
    
    // Set the JWT token in the request headers
    const obj = {
      bookId : this.books.bookId,
      sellerId : this.books.sellerId
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    this.http.post(`http://localhost:8081/home/sell/delete`, obj ,{ headers })
      .subscribe(
        (res: any) => {
          alert("book deleted");
          this.router.navigate(['/sellerbooks']);
        },
        (error) => {
          alert("cant delete this book" +error.message);
          // this.router.navigate(['/']);
        }
      );

  }

  navigateToAddBook() {
    this.router.navigate(['/addbook']);
  }
}
