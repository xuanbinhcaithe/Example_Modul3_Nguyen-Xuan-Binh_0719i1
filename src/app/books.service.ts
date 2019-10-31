import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Books} from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly API_URL = 'http://[::]:8081/books';

  constructor(private http: HttpClient) {
  }

  getBookList(): Observable<Books[]> {
    return this.http.get<Books[]>(this.API_URL);
  }
  createBook(book: Partial<Books>): Observable<Books> {
    return this.http.post<Books>(this.API_URL, book);
  }
  editBooks(book: Partial<Books>): Observable<Books> {
    return this.http.patch<Books>(this.API_URL + '/' + book.id, book);
  }
}
