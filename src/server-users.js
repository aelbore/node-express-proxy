const express = require('express');
const http = require('http');

const app = express();

let userRoute = express.Router()
  .get('/users', (req, res) => {
    return res.status(200).json([
      { "fname": "John", "lname": "Baptist" },
      { "fname": "Bob", "lname": "Marley" }
    ])
  });

  app.use('/api/server-users', userRoute);

  const server = http.createServer(app);
  server.listen(3002, '0.0.0.0')
    .on('listening', () => {
      const { port, address } = server.address();
      console.log(`Express Server user started on port ${port} at ${address}.`);
    });