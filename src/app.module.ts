import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesService } from './notes/notes.service';
import { NotesController } from './notes/notes.controller';

@Module({
  imports: [],
  controllers: [AppController, NotesController],
  providers: [AppService, NotesService],
})
export class AppModule {}
