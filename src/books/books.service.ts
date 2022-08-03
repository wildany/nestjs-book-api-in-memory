import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

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

  createBooks(title: string, author: string, category: string) {
    this.books.push({
      id: uuidv4(),
      title,
      author,
      category,
    });
  }

  updateBooks(id: string, title: string, author: string, category: string) {
    const bookIdx = this.findBookIndex(id);
    this.books[bookIdx].title = title;
    this.books[bookIdx].author = author;
    this.books[bookIdx].category = category;
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
    this.books.splice(bookIdx);
  }
}
