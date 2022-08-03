import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  private bookServices: BooksService;
  constructor(bookService: BooksService) {
    this.bookServices = bookService;
  }
  //atau constructor(private bookServices: BooksService)

  @Get('/')
  getAllBooks() {
    return this.bookServices.getAllBook();
  }

  @Get('/:id')
  getBookById(@Param('id') id: string) {
    return this.bookServices.getBookById(id);
  }
  @Post('/')
  createBooks(
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    return this.bookServices.createBooks(title, author, category);
  }

  @Put('/:id')
  updateBooks(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    return this.bookServices.updateBooks(id, title, author, category);
  }

  @Delete('/:id')
  deleteBook(@Param('id') id: string) {
    return this.bookServices.deleteBook(id);
  }
}
