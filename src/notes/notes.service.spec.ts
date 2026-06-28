import { Test, TestingModule } from '@nestjs/testing';
import { NotesService } from './notes.service';

describe('NotesService', () => {
  let service: NotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesService],
    }).compile();

    service = module.get<NotesService>(NotesService);
  });

  // Test 1
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Test 2
  it('should create a note', () => {
    const note = service.create('Test Title', 'Test Content');
    expect(note.id).toBe(1);
    expect(note.title).toBe('Test Title');
    expect(note.content).toBe('Test Content');
  });

  // Test 3
  it('should return all notes', () => {
    service.create('Note 1', 'Content 1');
    service.create('Note 2', 'Content 2');
    const notes = service.findAll();
    expect(notes.length).toBe(2);
  });

  // Test 4
  it('should find a note by id', () => {
    service.create('My Note', 'My Content');
    const note = service.findOne(1);
    expect(note?.title).toBe('My Note');
  });

  // Test 5
  it('should delete a note', () => {
    service.create('Delete Me', 'Content');
    const deleted = service.delete(1);
    expect(deleted?.title).toBe('Delete Me');
    expect(service.findAll().length).toBe(0);
  });

  // Test 6
  it('should return null if note not found', () => {
    const deleted = service.delete(999);
    expect(deleted).toBe(null);
  });

});