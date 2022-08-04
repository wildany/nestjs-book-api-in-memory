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
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

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
  createBooks(@Body() payload: CreateBookDto) {
    return this.bookServices.createBooks(payload);
  }

  @Put('/:id')
  updateBooks(@Param('id') id: string, @Body() payload: UpdateBookDto) {
    return this.bookServices.updateBooks(id, payload);
  }

  @Delete('/:id')
  deleteBook(@Param('id') id: string) {
    return this.bookServices.deleteBook(id);
  }
}
