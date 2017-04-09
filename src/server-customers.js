const express = require('express');
const http = require('http');

const app = express();

let userRoute = express.Router()
  .get('/customers', (req, res) => {
    return res.status(200).json([
      {
          "firstName": "John",
          "lastName": "Smith",
          "age": 25,
          "address":
          {
              "streetAddress": "21 2nd Street",
              "city": "New York",
              "state": "NY",
              "postalCode": "10021"
          },
          "phoneNumber":
          [
              {
                "type": "home",
                "number": "212 555-1234"
              },
              {
                "type": "fax",
                "number": "646 555-4567"
              }
          ]
      }
    ])
  });

app.use('/api/server-customers', userRoute);

const server = http.createServer(app);
server.listen(3001, '0.0.0.0')
  .on('listening', () => {
    const { port, address } = server.address();
    console.log(`Express Server customers started on port ${port} at ${address}.`);
  });