const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const data = require('./app.js');
const publicPath = path.join(__dirname, '/public');
const port = process.env.PORT || 4000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});


app.get('/', (req, res) => {
  res.redirect('/map.html');
});

app.get('/data', (req, res) => {
  // res.send('Hello world!')
  res.send({
    name: `${JSON.stringify(data.ports)}`,
    likes: 'Cycling'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'There was an error with this request'
  });
});


server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
