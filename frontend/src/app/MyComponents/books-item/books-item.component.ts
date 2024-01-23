import { Component, Input } from '@angular/core';
import { Book } from '../../Book';

@Component({
  selector: 'app-books-item',
  standalone: true,
  imports: [],
  templateUrl: './books-item.component.html',
  styleUrl: './books-item.component.css'
})
export class BooksItemComponent {
  @Input () book :Book | undefined ;
}
