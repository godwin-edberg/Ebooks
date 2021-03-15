import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { BooksDetail } from 'src/app/models/books-detail';
import { BooksFacade } from '../+state/books.facade';

@Component({
  selector: 'app-assignment-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss'],
})
export class SearchBooksComponent implements OnInit {
  searchText: any;
  books: Observable<BooksDetail[]>;

  constructor(private facade: BooksFacade, private router: Router) {}

  ngOnInit(): void {}

  async searchBooks(searchText: string) {
    /* istanbul ignore else*/
    if (!!searchText) {
      this.facade.searchBooks(searchText);
      this.books = this.facade.loadBooks$;
    }
  }

  onCardClick(item) {
    let bookId: string;
    try {
      bookId = JSON.parse(JSON.stringify(item)).id;
    } catch (error) {
      console.log('Error occured when converting json into object');
    }
    this.router.navigate(['/details', bookId]);
  }
}
