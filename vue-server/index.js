const app = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

function getRandomValueArray() {
  return Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
}

io.on('connection', (socket) => {
  async function sendData() {
    while (true) {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const data = await getRandomValueArray();

      console.log('Sending: ' + JSON.stringify(data));
      socket.broadcast.emit('newChartData', data);
      socket.broadcast.emit('newSpeedometerValue', data[0]);
    }
  }
  sendData();
});

http.listen(5000, () => {
  console.log('Server listening on port 5000');
});
