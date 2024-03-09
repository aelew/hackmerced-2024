import express from 'express';

const app = express();

app.get('/', function (req, res) {
  res.send('It works!');
});

app.listen(3000);
console.log('Express server started: http://localhost:3000');
