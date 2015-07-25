'use strict';

var express = require('express'),
  bodyparser = require('body-parser'),
  server = express(),
  scribe = require('scribe-js')({rootPath: 'http-logs'}),
  console = process.console;

module.exports = httpServer;

function httpServer(config) {
  var port = config.httpPort;

  //configure express to serve static files from the given directory
  if (config.env === 'dist') {
    console.log('serving /dist');
    // configure express to use the scribe logger
    server.use(scribe.express.logger());
    server.use('/http-logs', scribe.webPanel()); // access at http://localhost:[port]/http-logs
    server.use(express.static(__dirname + '/../../dist'));
  } else {
    console.log('serving /client');
    server.use(express.static(__dirname + '/../../client'));  
  }

  //configure express to use body-parser
  server.use(bodyparser.json());
  server.use(bodyparser.raw());
  server.use(bodyparser.urlencoded({extended: true}));

  server.listen(port);

  console.log('Server started at http://localhost:' + port + '/');

  return server;
}
