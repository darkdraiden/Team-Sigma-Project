import { Component } from '@angular/core';
import { Book } from "../../../app/Book";
import { NgFor } from '@angular/common';
import { BooksItemComponent } from "../books-item/books-item.component";
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'app-books',
    standalone: true,
    templateUrl: './books.component.html',
    styleUrl: './books.component.css',
    imports: [NgFor, BooksItemComponent]
})
export class BooksComponent {
  books : any
  constructor(private http :HttpClient)
  {
    
  }

  ngOnInit()
  {
    let response = this.http.get(`http://localhost:8081/books`);
    console.log("on books");
    response.subscribe((data)=>this.books = data)
  }
  buyClick()
  {
    console.log("buy clikck")
  }
}
