import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectBook } from '../store/books.selector';
import { invokeBooksApi } from '../store/books.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}
  book$ = this.store.pipe(select(selectBook));

  ngOnInit(): void {
    this.store.dispatch(invokeBooksApi());
  }
}
