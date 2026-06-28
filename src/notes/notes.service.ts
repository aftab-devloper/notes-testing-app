import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {
  private notes: { id: number; title: string; content: string }[] = [];
  private nextId = 1;

  create(title: string, content: string) {
    const note = { id: this.nextId++, title, content };
    this.notes.push(note);
    return note;
  }

  findAll() {
    return this.notes;
  }

  findOne(id: number) {
    return this.notes.find((note) => note.id === id);
  }

  delete(id: number) {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index === -1) return null;
    const deleted = this.notes.splice(index, 1);
    return deleted[0];
  }
}