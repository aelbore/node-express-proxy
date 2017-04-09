const express = require('express');
const Server = require('./utils').Server;

const Routes = [
  (() => {
    return express.Router()
      .get('/server-customers/customers', (req, res) => {
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
  })()
];

Server
  .create(3001, '0.0.0.0', { routes: Routes })
  .start();

