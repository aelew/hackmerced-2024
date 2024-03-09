import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send('It works!');
});

app.listen(3000, () =>
  console.log('Express server ready on port 3000 - http://localhost:3000')
);
