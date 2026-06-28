import { test, expect } from '@playwright/test';

test('POST /notes — should create a note', async ({ request }) => {
  const res = await request.post('http://localhost:3000/notes', {
    data: { title: 'E2E Note', content: 'E2E Content' },
  });
  expect(res.status()).toBe(201);
  const body = await res.json();
  expect(body.title).toBe('E2E Note');
});

test('GET /notes — should return notes', async ({ request }) => {
  await request.post('http://localhost:3000/notes', {
    data: { title: 'Note 1', content: 'Content 1' },
  });
  const res = await request.get('http://localhost:3000/notes');
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.length).toBeGreaterThan(0);
});

test('DELETE /notes/:id — should delete a note', async ({ request }) => {
  await request.post('http://localhost:3000/notes', {
    data: { title: 'Delete Me', content: 'Content' },
  });
  const res = await request.delete('http://localhost:3000/notes/3');
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.title).toBe('Delete Me');
});