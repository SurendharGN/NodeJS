/* CORE MODULES:
1. http: launch a server, send request to other backend services
2.https
3.fs
4.path
5.os */

const http = require('http');

const route= require('./routes')

const server = http.createServer(route);

server.listen(3000)