import { createAction, props } from '@ngrx/store';
import { Books } from './books';

export const invokeBooksApi = createAction('[Book API] Invoke Books Fetch API');

export const booksFetchAPISuccess = createAction(
  '[Books API] Fetch API success',
  props<{ allBooks: Books[] }>()
);
