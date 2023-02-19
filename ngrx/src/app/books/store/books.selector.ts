import { createFeatureSelector } from '@ngrx/store';
import { Books } from './books';

export const selectBook = createFeatureSelector<Books[]>('mybooks');
