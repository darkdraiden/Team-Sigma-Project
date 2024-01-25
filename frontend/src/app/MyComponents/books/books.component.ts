import { Component } from '@angular/core';
import { Book } from "../../../app/Book";
import { NgFor } from '@angular/common';
import { BooksItemComponent } from "../books-item/books-item.component";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
    selector: 'app-books',
    standalone: true,
    templateUrl: './books.component.html',
    styleUrl: './books.component.css',
    imports: [NgFor, BooksItemComponent]
})
export class BooksComponent {
  books : any
  constructor(private http :HttpClient, private router: Router)
  {
    
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
      this.router.navigate(['/bookitem', { bookData: JSON.stringify(book) }]);
    } else {
      console.error('Book data is undefined');
    }  }
}
