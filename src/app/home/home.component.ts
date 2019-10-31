
import { Component, OnInit } from '@angular/core';
import {Books} from '../books';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  booksList: Books[] = [];

  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
    this.booksService.getBookList().subscribe(
      result => {
        this.booksList = result;
        console.log(this.booksList);
      }, error => {
        alert('Lỗi dữ lấy dữ liệu từ service');
      });
  }

  seen(i) {
    const book = this.booksList[i];
    book.read = !book.read;
    console.log(book.read);

    return this.booksService.editBooks(book).subscribe(
      next => {
        alert('Chỉnh sửa thành công');
        document.location.reload();
      }, error => {
        alert('Chỉnh sửa thất bại');
      }
    );
  }
}
