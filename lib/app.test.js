import request from 'supertest';
import app from './app.js';

it('GET /cats returns 200', async () => {
  await request(app).get('/api/v1/cats').expect(200);
  expect.any(String);
});

it('POST /cats returns 200', async () => {
  await request(app)
    .post('/api/v1/cats')
    .send({ name: 'hildegarde', type: 'witch' })
    .expect(200);
  await request(app).get('/api/v1/cats').expect(200);
});

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});
