const app = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

function getRandomValueArray() {
  return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
}

io.on('connection', (socket) => {
  console.log('connected');

  async function sendData() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = getRandomValueArray();

    console.log(`Sending: ${JSON.stringify(data, null, 2)}`);
    socket.broadcast.emit(`newChartData ${data}`);
  }
});

http.listen(5000, () => {
  console.log('Server listening on port 5000');
});
