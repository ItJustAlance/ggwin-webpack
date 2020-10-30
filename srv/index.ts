let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let port = process.env.PORT || 8080;
app.get('/', (req, res) => {
  // res.sendFile(__dirname + 'index.html')
  res.sendfile('./');
});
http.listen(port, () => {
  console.log('Listening on port *:' + port);
});
io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });



});
