import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { BooksDetail } from 'src/app/models/books-detail';
import { AddBook, AddBookToCollection, RemoveBook, Search } from './books.actions';
import { State } from './books.reducer';
import { getCartItemsCount, getCollectionItemsCount,
         selectBookListById, selectBooksList, selectCartList,
         selectCartListById, selectCollectionList } from './books.selectors';


@Injectable()
export class BooksFacade {
  loadBooks$ = this.store.select(selectBooksList);

  loadBooksInCart$ = this.store.select(selectCartList);

  loadBooksInCollection$ = this.store.select(
    selectCollectionList
  );

  constructor(private store: Store<State>) {}

  getCollectionItemsCount() {
    return this.store.select(getCollectionItemsCount);
  }

  getCartItemsCount() {
    return this.store.select(getCartItemsCount);
  }

  searchBooks(searchText: string) {
    this.store.dispatch(new Search(searchText));
  }

  addBookToCartList(id: string) {
    this.store.dispatch(new AddBook(id));
  }

  getBookDetailsWithId(id: string) {
    return this.store.select(selectBookListById(id));
  }

  getBookDetailsWithIdInCart(id: string) {
    return this.store.select(selectCartListById(id));
  }

  removeItemFromCart(id: string) {
    this.store.dispatch(new RemoveBook(id));
  }

  addBookToCollectionList(booksDetail: BooksDetail) {
    this.store.dispatch(new AddBookToCollection(booksDetail));
  }
}
