import express from 'express';
import http from 'http';
import net from 'net';

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running...');
});

const findAvailablePort = (basePort, callback) => {
  const port = basePort;
  const server = net.createServer();

  server.listen(port, () => {
    server.once('close', () => {
      callback(port);
    });
    server.close();
  });

  server.on('error', () => {
    findAvailablePort(port + 1, callback);
  });
};

// Start with your base port, which is 5000
findAvailablePort(port, (availablePort) => {
  app.listen(availablePort, () => {
    console.log(`Server running on port ${availablePort}`);
  });
});
