import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mybooks',
  standalone: true,
  imports: [],
  templateUrl: './mybooks.component.html',
  styleUrl: './mybooks.component.css'
})
export class MybooksComponent {
  constructor(private http :HttpClient)
  {
      
  }
  ngOnInit()
  {
    // this.http.get(`${helper}`)
  }
}
