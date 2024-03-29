import { Component, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books-item',
  standalone: true,
  imports: [],
  templateUrl: './books-item.component.html',
  styleUrl: './books-item.component.css'
})
export class BooksItemComponent {
  constructor(private route: ActivatedRoute) {}

  book: any;
  
  ngOnInit() {
    // Retrieve the book data from the route parameters
    this.route.params.subscribe(params => {
      this.book = JSON.parse(params['bookData']);
      // console.log('Book data:', this.bookData);
    });
  }
}
