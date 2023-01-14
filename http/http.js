(function () {
  'use strict';
})();

const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to our home page')
  } else if (req.url === '/about') {
    res.end('welcome to our about page')
  } else {
  res.end('<h1>Ooop!</h1>');

  }
})

server.listen(5000);