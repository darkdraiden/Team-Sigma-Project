import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-book',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './seller-book.component.html',
  styleUrl: './seller-book.component.css'
})
export class SellerBookComponent {
  books : any
  id: string  | null = null;
  constructor(private http :HttpClient)
  {
    
  }

  ngOnInit()
  {
    if ( localStorage )
    this.id = localStorage.getItem("email")
    if (this.id !== null) {
      let response = this.http.get('http://localhost:8081/books');
      console.log('on seller books');

      response.subscribe((data) => {
        this.books = data;
      });
    } else {
      console.error('Email is missing in local storage');
    }
  }


  deleteClick()
  {

  }
}
