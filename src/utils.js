
const Server = {
  create: (port, ip, options) => {
    const express = require('express');
    const http = require('http');

    const app = express();
 
    if (options['routes'] && Array.isArray(options.routes)){
      options.routes.forEach((route) => {
        app.use('/api', route);
      }); 
    }

    return {
      start: () => {
        const server =  http.createServer(app);
        server.listen(port, ip)
          .on('listening', () => {
            const { port, address } = server.address();
            console.log(`Express server started on port ${port} at ${address}.`);
          });
      }
    }
  }
};

exports.Server = Server;

