import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  create(@Body() body: { title: string; content: string }) {
    return this.notesService.create(body.title, body.content);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(Number(id));
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.notesService.delete(Number(id));
  }
}