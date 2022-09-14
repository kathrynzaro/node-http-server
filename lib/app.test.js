import request from 'supertest';
import app from './app.js';

it('GET /cats returns 200', async () => {
  await request(app).get('/api/v1/cats').expect(200);
  expect.any(String);
});

it('GET /candies returns 200', async () => {
  await request(app).get('/api/v1/candies').expect(200);
  expect.any(String);
});

it('GET /sauces returns 200', async () => {
  await request(app).get('/api/v1/sauces').expect(200);
  expect.any(String);
});

it('POST /cats returns 200', async () => {
  await request(app)
    .post('/api/v1/cats')
    .send({ name: 'hildegarde', type: 'witch' })
    .expect(200);
  await request(app).get('/api/v1/cats').expect(200);
});

it('POST /candies returns 200', async () => {
  await request(app)
    .post('/api/v1/candies')
    .send({ name: 'dum dums', type: 'lollipop' })
    .expect(200);
  await request(app).get('/api/v1/candies').expect(200);
});

it('POST /sauces returns 200', async () => {
  await request(app)
    .post('/api/v1/sauces')
    .send({ name: 'cholula', heat: 'mild' })
    .expect(200);
  await request(app).get('/api/v1/sauces').expect(200);
});

it('PUT /cats returns 200', async () => {
  await request(app).put('/api/v1/cats').expect(200);
  await request(app).get('/api/v1/cats').expect(200);
  expect((res) => {
    res.body.data[0].species = 'cat';
  });
});

it('PUT /candies returns 200', async () => {
  await request(app).put('/api/v1/candies').expect(200);
  await request(app).get('/api/v1/candies').expect(200);
  expect((res) => {
    res.body.data[0].category = 'candy';
  });
});

it('PUT /sauces returns 200', async () => {
  await request(app).put('/api/v1/sauces').expect(200);
  await request(app).get('/api/v1/sauces').expect(200);
  expect((res) => {
    res.body.data[0].category = 'sauce';
  });
});

it('DELETE /cats returns 204', async () => {
  await request(app).delete('/api/v1/cats').expect(204);
});

it('DELETE /candies returns 204', async () => {
  await request(app).delete('/api/v1/candies').expect(204);
});

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');

  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});
