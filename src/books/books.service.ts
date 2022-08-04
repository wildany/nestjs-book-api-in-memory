import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  private books: any[] = [];

  getAllBook(): any[] {
    return this.books;
  }

  getBookById(id: string) {
    const bookId = this.findBookIndex(id);
    return this.books[bookId];
  }

  createBooks(payload: CreateBookDto) {
    const { title, author, category, year } = payload;
    this.books.push({
      id: uuidv4(),
      title,
      author,
      category,
      year,
    });
  }

  updateBooks(id: string, payload: UpdateBookDto) {
    const { title, author, category, year } = payload;
    const bookIdx = this.findBookIndex(id);
    this.books[bookIdx].title = title;
    this.books[bookIdx].author = author;
    this.books[bookIdx].category = category;
    this.books[bookIdx].year = year;
  }

  findBookIndex(id: string) {
    const bookIdx = this.books.findIndex((book) => book.id === id);
    if (bookIdx === -1) {
      throw new NotFoundException(`Book with ${id} is not found`);
    }

    return bookIdx;
  }

  deleteBook(id: string) {
    const bookIdx = this.findBookIndex(id);
    console.log(bookIdx);
    this.books.splice(bookIdx);
  }
}
