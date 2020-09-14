import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  const a = { t: 2 };
  response.json({ ok: true });
});

app.listen(3000, () => {
  console.log('running on https://localhost:3000/');
});
