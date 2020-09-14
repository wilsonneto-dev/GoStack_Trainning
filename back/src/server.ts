import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ ok: true }));

app.listen(3000, () => {
  console.log('running on https://localhost:3000/');
});
