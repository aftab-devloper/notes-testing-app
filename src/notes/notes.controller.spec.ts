import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../app.module';

describe('NotesController (API)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('POST /notes — should create a note', async () => {
    const res = await request(app.getHttpServer())
      .post('/notes')
      .send({ title: 'Test Note', content: 'Test Content' });

    expect(res.status).toBe(201);
    expect(res.body.title).toBe('Test Note');
  });

  it('GET /notes — should return all notes', async () => {
    await request(app.getHttpServer())
      .post('/notes')
      .send({ title: 'Note 1', content: 'Content 1' });

    const res = await request(app.getHttpServer()).get('/notes');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it('DELETE /notes/:id — should delete a note', async () => {
    await request(app.getHttpServer())
      .post('/notes')
      .send({ title: 'Delete Me', content: 'Content' });

    const res = await request(app.getHttpServer()).delete('/notes/1');
    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Delete Me');
  });
});