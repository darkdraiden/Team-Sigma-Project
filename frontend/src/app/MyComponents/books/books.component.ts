import { Component, OnInit } from '@angular/core';
import { Book } from "../../../app/Book";
import { NgFor, NgIf } from '@angular/common';
import { BooksItemComponent } from "../books-item/books-item.component";
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CarouselComponent } from "../carousel/carousel.component";
@Component({
    selector: 'app-books',
    standalone: true,
    templateUrl: './books.component.html',
    styleUrl: './books.component.css',
    imports: [NgFor, BooksItemComponent, CarouselComponent, NgIf, RouterModule]
})
export class BooksComponent implements OnInit {
  books : any
  constructor(private http :HttpClient, private router: Router)
  {
    // if(!localStorage.getItem('email'))
    // this.router.navigate(['/login']);
  }

  ngOnInit()
  {
    let response = this.http.get(`http://localhost:8081/books`);
    console.log("on books");
    response.subscribe((data)=>this.books = data)
  }
  buyClick(book: any) {
    console.log('buy click');
    // Navigate to 'bookitem' page and pass the book data as a parameter
    if (book) {
      // Navigate to 'bookitem' page and pass the book data as a parameter
      this.router.navigate(['/bookitem' , { bookData: JSON.stringify(book) }], {
        skipLocationChange: true,
      });
    } else {
      console.error('Book data is undefined');
    }  
  }
}
