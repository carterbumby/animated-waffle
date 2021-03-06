#!/usr/bin/env node
const app = require('./app');
const debug = require('debug')('express-react:server');
const  http = require('http');
 
const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

const server = http.createServer(app);
server
    .listen(port)
    .on('error', onError)
    .on('listening', onListening)
;
 

// Functions
function normalizePort(val) {
   var port = parseInt(val, 10);
 
   if (isNaN(port)) return val;
   if (port >= 0) return port;
   return false;
}
 
function onError(error) {
   if (error.syscall !== 'listen') throw error;

   let bind = typeof port === 'string' ? ('Pipe ' + port) : ('Port ' + port);

   switch (error.code) {
       case 'EACCES':
           console.error(bind + ' requires elevated privileges');
           process.exit(1);
           break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
   }
}
 
function onListening() {
   let addr = server.address();
   let bind = typeof addr === 'string' ? ('pipe ' + addr) : ('port ' + addr.port);
   debug('Listening on ' + bind);
}