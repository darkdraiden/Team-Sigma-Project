import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, inject } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-books-item',
  standalone: true,
  imports: [],
  templateUrl: './books-item.component.html',
  styleUrl: './books-item.component.css'
})
export class BooksItemComponent {
  constructor(private route: ActivatedRoute,  private router: Router, private http :HttpClient) {
    if(!localStorage || !localStorage.getItem('email'))
    this.router.navigate(['/login']);
  }

  book: any;
  toster = inject(ToastrService)
  sellerId : any
  ngOnInit() {
    // Retrieve the book data from the route parameters
    this.route.params.subscribe(params => {
      this.book = JSON.parse(params['bookData']);
      // console.log('Book data:', this.bookData);
    });

    this.sellerId = this.book.sellseId
  }


  buyBook(book : any)
  {
    const jwtToken = localStorage.getItem('loginToken'); 
    const email = localStorage.getItem('email');
    if (!jwtToken) {
      this.toster.error("JWT token not found in local storage","Error")

      // alert('JWT token not found in local storage');
      return;
    }
    console.log(book);

    const obj = {
      bookId : book.bookId,
      sellerId : book.sellerId,
      buyerId : email
    }
    console.log(obj)
    const headers = new HttpHeaders().set('Authorization', `Bearer ${jwtToken}`);
    // this.http.post(`http://localhost:8081/home/buy`, {
    //   headers: headers,
    //   body: obj
      
    // })
    this.http.post(`http://localhost:8081/home/buy`, obj, { headers: headers })

      .subscribe(
        (res: any) => {
          this.toster.success("Book ordered", "Success")

          // window.location.reload();
        },
        (error) => {
          console.log(error)
          this.toster.error("Cant order this"+error,"Error")

        }
      );
  }

}
