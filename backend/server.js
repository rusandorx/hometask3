const express = require('express');
const api = require('./api');
const bodyParser = require('body-parser');
const port = 8080;

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, 'localhost', err => {
  if (err) {
    return console.log(err);
  }

  console.log(`https://localhost:${port}`);
});
