import { NgFor } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buy-book',
  standalone: true,
  imports: [NgFor],
  templateUrl: './buy-book.component.html',
  styleUrl: './buy-book.component.css'
})
export class BuyBookComponent {

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
    this.jwtToken = localStorage.getItem('loginToken');
    if (!this.jwtToken) {

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


  buyClick(book: any) {
    console.log('buy click');
    // Navigate to 'bookitem' page and pass the book data as a parameter
    if (book) {
      // Navigate to 'bookitem' page and pass the book data as a parameter
      this.router.navigate(['/bookitem', { bookData: JSON.stringify(book) }]);
    } else {
      
      console.error('Book data is undefined');
    }  
  }


  
}
