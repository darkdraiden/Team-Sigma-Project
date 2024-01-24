import { Component } from '@angular/core';
import { Book } from "../../../app/Book";
import { NgFor } from '@angular/common';
import { BooksItemComponent } from "../books-item/books-item.component";
@Component({
    selector: 'app-books',
    standalone: true,
    templateUrl: './books.component.html',
    styleUrl: './books.component.css',
    imports: [NgFor, BooksItemComponent]
})
export class BooksComponent {
  books :Book[]
  constructor()
  {
    this.books = [
      {
        name : "book1",
        author : "a1",
        desc : "desc 1"
      },
      {
        name : "book2",
        author : "a1",
        desc : "desc 2"
      },
      {
        name : "book3",
        author : "a1",
        desc : "desc 3"
      },
    ]
  }
}
