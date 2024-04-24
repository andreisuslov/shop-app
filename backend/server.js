import express from 'express';
import products from './data/products.js';
import net from 'net';

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
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
