const express = require('express');
const api = require('./api');
const bodyParser = require('body-parser');
const port = 3030;

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`https://localhost:${port}`);
});
