const express = require('express');
const http = require('http');
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();

const app = express();
const serverConfig = require('./server-gateway.config.json');

serverConfig.forEach((config) => {
  app.all(config.path, (req, res) => {
    apiProxy.web(req, res, { target: config.target });
  });
});

const server = http.createServer(app);
server.listen(51202, '0.0.0.0')
  .on('listening', () => {
    const { port, address } = server.address();
    console.log(`Express Server gateway started on port ${port} at ${address}.`);
  });