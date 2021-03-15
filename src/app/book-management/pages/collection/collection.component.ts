import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksDetail } from 'src/app/models/books-detail';
import { BooksFacade } from '../+state/books.facade';


@Component({
  selector: 'app-assignment-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  books: Observable<BooksDetail[]>;
  constructor(private facade: BooksFacade) {}

  ngOnInit(): void {
    this.books = this.facade.loadBooksInCollection$;
  }
}
