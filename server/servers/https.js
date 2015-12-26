'use strict';

var express = require('express'),
  bodyparser = require('body-parser'),
  fs = require('fs'),
  https = require('https'),
  server = express();/*,
  scribe = require('scribe-js')({rootPath: 'https-logs'}),
  console = process.console;*/

module.exports = httpsServer;

function httpsServer(config) {
  var port = config.httpsPort,

    httpsOptions = {
      key: fs.readFileSync('server/ssl/server.key'),
      cert: fs.readFileSync('server/ssl/server.crt'),

      // This is the password that was used to create the server's certificate.
      // Located in the server/ssl/passphrase file
      passphrase: '1234'
    };

  // configure express to use the scribe logger
  //server.use(scribe.express.logger());
  //server.use('/https-logs', scribe.webPanel()); // access at https://localhost:[port]/https-logs

  //configure express to serve static files from the given directory
  server.use(express.static(__dirname + '/../../client'));  

  //configure express to use body-parser
  server.use(bodyparser.json());
  server.use(bodyparser.raw());
  server.use(bodyparser.urlencoded({extended: true}));
  
  // Create and start the https server
  https.createServer(httpsOptions, server).listen(port, function () {
    console.log('Server listening at https://localhost:' + port + '/');
  });

  return server;
}
