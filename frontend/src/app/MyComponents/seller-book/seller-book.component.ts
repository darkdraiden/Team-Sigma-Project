import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
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

  }

  navigateToAddBook() {
    this.router.navigate(['/addbook']);
  }
}
