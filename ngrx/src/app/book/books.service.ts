import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Books } from '../books/store/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  getBooks() {
    return this.http.get<Books>('http://localhost:3000/books')
  }


}
