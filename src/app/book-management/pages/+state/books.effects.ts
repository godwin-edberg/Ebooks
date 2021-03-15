import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import { from } from 'rxjs';

import { SearchBooksService } from 'src/app/services/search-books.service';
import { SEARCH, SEARCH_DONE } from './books.actions';

@Injectable()
export class BookEffects {
  constructor(
    private actions$: Actions,
    private searchBooksService: SearchBooksService
  ) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SEARCH),
      mergeMap((searchText) => {
        return from(
          this.searchBooksService.searchBooks(
            JSON.parse(JSON.stringify(searchText)).payload
          )
        ).pipe(
          mergeMap((list) => [
            {
              type: SEARCH_DONE,
              payload: list.items,
            },
          ])
        );
      })
    )
  );
}
