import { NgFor } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mybooks',
  standalone: true,
  imports: [NgFor],
  templateUrl: './mybooks.component.html',
  styleUrl: './mybooks.component.css'
})
export class MybooksComponent {
  constructor(private http :HttpClient,private router: Router)
  {
      
  }
  toster = inject(ToastrService)
  books : any
  id: string  | null = null;
  jwtToken: string | null | undefined;
  ngOnInit()
  {

    // this.http.get(`${helper}`)
    // if (typeof window !== 'undefined' && window.localStorage)
    this.id = localStorage.getItem("email")
    // if (typeof window !== 'undefined' && window.localStorage)
    this.jwtToken = localStorage.getItem('loginToken'); // Replace with your actual key
    if (!this.jwtToken) {
      // Handle the case when the token is not available
      // this.toster.error("Login First","Error")
      // alert('JWT token not found in local storage');
      return;
    }
    console.log(this.id)
  const headers = new HttpHeaders().set('Authorization', `Bearer ${this.jwtToken}`);
    if (this.id !== null && this.id) {
      let response = this.http.get(`http://localhost:8081/home/myStock/${this.id}`,{ headers });
      console.log('on my purchasae');
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
}
