const server = require('./config/app')();
server.create();
module.exports = server.start();

