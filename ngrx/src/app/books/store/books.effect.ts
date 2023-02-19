import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BooksService } from 'src/app/book/books.service';
import { Store, select } from '@ngrx/store';
import { booksFetchAPISuccess, invokeBooksApi } from './books.action';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { selectBook } from './books.selector';

@Injectable()
export class BooksEffect {
  constructor(
    private action$: Actions,
    private bookService: BooksService,
    private store: Store
  ) {}

  loadAllBooks$ = createEffect(() =>
    this.action$.pipe(
      ofType(invokeBooksApi),
      withLatestFrom(this.store.pipe(select(selectBook))),
      mergeMap((bookFormStore) => {
        if (bookFormStore.length > 0) {
          return EMPTY;
        }
        return this.bookService
          .getBooks()
          .pipe(map((data) => booksFetchAPISuccess({ allBooks: [data] })));
      })
    )
  );
}
