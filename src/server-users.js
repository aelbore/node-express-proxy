const express = require('express');
const Server = require('./utils').Server;

const Routes = [
  (() => {
    return express.Router()
      .get('/server-users/users', (req, res) => {
        return res.status(200).json([
          { "fname": "John", "lname": "Baptist" },
          { "fname": "Bob", "lname": "Marley" }
        ])
      });
  })()
];

Server
  .create(3002, '0.0.0.0', { routes: Routes })
  .start();

