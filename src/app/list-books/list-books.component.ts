import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {BooksService} from '../books.service';
import {Books} from '../books';

@Component({
  selector: 'app-create-book',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit {
 public inputBook = new FormControl();
  constructor(private booksService: BooksService) {
  }

  ngOnInit() {
  }

  createBook() {
    if (this.inputBook.value == null) {
      return alert('Vui lòng điền tên');
    }
    const book: Partial<Books> = {
      name: this.inputBook.value
    };
    console.log(book);
    return this.booksService.createBook(book).subscribe(
      next => {
        alert('Thêm mới thành công');
        this.inputBook.setValue('');
        document.location.reload();
      }, error => {
        alert('Thêm mới thất bại');
      }
    );
  }
}
