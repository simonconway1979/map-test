const express = require('express');
const data = require('./app.js')
const port = process.env.PORT || 4000;

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('Hello world!')
  res.send({
    name: `${JSON.stringify(data.ports)}`,
    likes: 'Cycling'
  });
});

app.get('/map', (req, res) => {
  res.send('Map');
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'There was an error with this request'
  });
});


app.listen(port);
